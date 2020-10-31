import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { useParams, useHistory } from 'react-router-dom';

import { getGridInfo } from '../../graphql/queries';
import GridLoading from '../../component/grid/loading';
import { Context } from '../../context/context';
import GridGallery from '../../component/grid/gallery';

const IMAGE_URL_PREFIX = 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/';

export default function Grid() {
  const { id } = useParams();
  const history = useHistory();

  const [context] = useContext(Context);

  // declare contact list variable
  let contacts = [];

  if (context && context.contacts) {
    contacts = context.contacts;
  }

  const [prev, next] = [
    contacts[contacts.findIndex((_) => _ === id) - 1],
    contacts[contacts.findIndex((_) => _ === id) + 1],
  ];

  // set body background
  document.body.style.backgroundColor = '#CED8B3';

  const {
    loading, data, error,
  } = useQuery(gql`${getGridInfo}`,
    {
      variables: {
        limit: 2000,
        filter: {
          basicId: {
            eq: id,
          },
        },
        id,
      },
    });

  if (loading) {
    return <GridLoading />;
  }

  if (error) {
    history.push('/404');
    return <GridLoading />;
  }

  let {
    listImages: {
      items: images,
    },
    // eslint-disable-next-line prefer-const
    getBasic: contact,
  } = data;

  images = images.map(({ url, width, height }) => ({
    url: `${IMAGE_URL_PREFIX}${encodeURIComponent(url)}`,
    image: url,
    width,
    height,
  }));

  // set body background
  document.body.style.backgroundColor = '#CED8B3';

  return (
    <GridGallery
      contact={contact}
      images={images}
      prev={prev}
      next={next}
    />
  );
}
