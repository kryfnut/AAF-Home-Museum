import React, { useState } from 'react';
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

  const [interval, intervalSetter] = useState(undefined);

  const resetInterval = () => window.clearTimeout(interval);

  // set body background
  document.body.style.backgroundColor = 'radial-gradient(88.77% 88.77% at 50% 50%, rgba(255, 225, 225, 0.69) 0%, rgba(206, 216, 179, 0.69) 42.71%, rgba(180, 203, 216, 0.69) 65.56%, rgba(255, 240, 200, 0) 100%)';

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

  const refresh = async () => {
    try {
      await fetchMore({
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
    } catch (e) {
      console.log(e);
    }
  };

  const setCurrentInterval = () => {
    const itv = setTimeout(() => { refresh(); }, 10000);
    intervalSetter(itv);
  };

  return (
    <LauncherGallery
      interval={interval}
      setCurrentInterval={setCurrentInterval}
      resetInterval={resetInterval}
      images={items}
    />
  );
}
