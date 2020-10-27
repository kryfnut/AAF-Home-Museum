import React from 'react';
import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

import { getBasic } from '../../../graphql/queries';
import GridLoading from '../../../component/grid/loading';
import GridInformationComponent from '../../../component/grid/information';

/* route for grid image view */
export default function GridInformation() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(gql`${getBasic}`, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <GridLoading />;
  }

  // TODO error handler
  if (error) {
    return <div>error</div>;
  }

  const { getBasic: information } = data;

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <GridInformationComponent {...information} />
  );
}
