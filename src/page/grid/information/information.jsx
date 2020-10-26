import React from 'react';
import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

import { getBasic } from '../../../graphql/queries';

/* route for grid image view */
export default function GridInformation() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(gql`${getBasic}`, {
    variables: {
      id,
    },
  });

  return (
    <div className="grid-information-container">
      grid information container
    </div>
  );
}
