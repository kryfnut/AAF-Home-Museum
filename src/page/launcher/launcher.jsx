import React, { useState } from 'react';
import gql from 'graphql-tag';
import {useHistory} from 'react-router-dom';
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

  const history = useHistory();
  const [interval, intervalSetter] = useState(undefined);

  const resetInterval = () => window.clearTimeout(interval);

  // set body background
  document.body.style.backgroundColor = '#FFF59B';

  if (loading) {
    return (
      <LauncherLoading />
    );
  }

  if (error) {
    history.push('/404');
    return <LauncherLoading />;
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
    const itv = setTimeout(() => { refresh(); }, 8000);
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
