import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { listBasics } from '../../graphql/queries';
import GuideLoading from '../../component/guide/loading';

export default function Guide() {
  const {
    loading, data, error,
  } = useQuery(gql`${listBasics}`,
    {
      variables: {
        limit: 500,
      },
    });

  if (loading) {
    return <GuideLoading />;
  }

  if (error) {
    // todo error handler
    return (
      <div>error...</div>
    );
  }

  const { listBasics: result } = data;
  const { items: contacts } = result;

  return (
    <div>
      {JSON.stringify(contacts)}
    </div>
  );
}
