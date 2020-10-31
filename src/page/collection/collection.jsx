import React, { useContext } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { listBasics } from '../../graphql/queries';
import { Context } from '../../context/context';

import CollectionLoading from '../../component/collection/loading';
import CollectionGallery from '../../component/collection/gallery';

export default function Collection() {
  const [context] = useContext(Context);
  const history = useHistory();

  const {
    loading, data, error,
  } = useQuery(gql`${listBasics}`,
    {
      variables: {
        limit: 500,
      },
    });

  if (loading) {
    return (
      <CollectionLoading />
    );
  }

  if (error) {
    history.push('/404');
    return <CollectionLoading />;
  }

  document.body.style.backgroundColor = '#000000';

  const { collection } = context || {};
  const { listBasics: result } = data;
  const { items: contacts } = result;
  let collected = [
    {
      id: 'a58ef804-05ba-48ca-a506-811e1a00f78c',
      url: 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/a58ef804-05ba-48ca-a506-811e1a00f78c-1602264046827.13961.jpg',
      width: 1440,
      height: 1080,
    },
    {
      id: 'a58ef804-05ba-48ca-a506-811e1a00f78c',
      url: 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/a58ef804-05ba-48ca-a506-811e1a00f78c-1602264046828.02476.jpg',
      width: 1080,
      height: 1440,
    },
  ];

  if (collection && collection.length) collected = collection;
  collected = collected.map((item) => ({
    ...item,
    ...contacts.find((contact) => contact.id === item.id),
  }));

  // if not
  if (!collected.length) {
    history.push('/entrance-nope');
    return <CollectionLoading />;
  }

  // if has a collection
  return <CollectionGallery collection={collected} />;
}
