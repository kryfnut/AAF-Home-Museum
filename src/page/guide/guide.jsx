import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { listBasics } from '../../graphql/queries';
import GuideLoading from '../../component/guide/loading';
import GuideContact from '../../component/guide/guide-contact';
import {useHistory} from 'react-router-dom';

export default function Guide() {
  const {
    loading, data, error,
  } = useQuery(gql`${listBasics}`,
    {
      variables: {
        limit: 500,
      },
    });

  const history = useHistory();

  if (loading) {
    return <GuideLoading />;
  }

  if (error) {
    history.push('/404');
    return <GuideLoading />;
  }

  const { listBasics: result } = data;
  const { items: contacts } = result;

  // set body background
  document.body.style.backgroundColor = '#CED8B3';

  return (
    <GuideContact contacts={contacts} />
  );
}
