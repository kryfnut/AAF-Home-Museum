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
  let collected = [];

  if (collection && collection.length) collected = collection;
  collected = collected.map((item) => ({
    ...item,
    ...contacts.find((contact) => contact.id === item.basicId),
  }));

  // if not
  if (!collected.length) {
    history.push('/entrance-nope');
    return <CollectionLoading />;
  }

  // if has a collection
  return <CollectionGallery collection={collected} />;
}
