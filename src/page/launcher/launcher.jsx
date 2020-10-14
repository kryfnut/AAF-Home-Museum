import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { listImages } from '../../graphql/queries';
import LauncherLoading from '../../component/launcher/loading';
import LauncherGallery from '../../component/launcher/gallery';

export default function Launcher() {
  const {
    loading, data, error, fetchMore,
  } = useQuery(gql`${listImages}`,
    {
      variables: {
        limit: 30,
      },
    });

  if (loading) {
    return (
      <LauncherLoading />
    );
  }

  if (error) {
    // todo error handler
    return (
      <div>error...</div>
    );
  }

  const { listImages: currentPageListImages } = data;
  const { items, nextToken } = currentPageListImages;

  const refresh = () => fetchMore({
    variables: {
      nextToken,
    },
    updateQuery: ((previousQueryResult, { fetchMoreResult }) => {
      if (fetchMoreResult) {
        return fetchMoreResult;
      }
      return previousQueryResult;
    }),
  });

  setInterval(() => {
    refresh();
  }, 10000);

  return (
    <LauncherGallery images={items} />
  );
}
