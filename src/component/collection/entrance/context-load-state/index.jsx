import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import './index.scss';
import { Context } from '../../../../context/context';

import { getCollection } from '../../../../graphql/queries';

export default function ContextLoadState({ id, onLoad }) {
  const [context, setContext] = useContext(Context);

  const { loading, data, error } = useQuery(gql`${getCollection}`, {
    variables: {
      id,
    },
  });

  if (loading) return <span className="context-load-state">please waiting...</span>;
  if (error) return <span className="context-load-state">ops...an uncepted error happened</span>;

  const { getCollection: collection } = data;

  setTimeout(() => {
    setContext({
      ...context,
      collection: [
        ...collection.image,
      ],
    });
    onLoad(!!collection);
  }, 2500);

  return (
    <span className={`context-load-state ${data ? 'context-load-state-loaded' : ''}`}>
      {
      collection ? 'got your collection! just wait for a little moment' : 'no such collection'
  }
    </span>
  );
}

ContextLoadState.propTypes = {
  id: propTypes.string.isRequired,
  onLoad: propTypes.func.isRequired,
};
