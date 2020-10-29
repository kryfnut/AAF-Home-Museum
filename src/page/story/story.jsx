import React, { useState } from 'react';
import gql from 'graphql-tag';
import {useHistory} from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { getStoryInfo } from '../../graphql/queries';
import StoryInfiniteList from '../../component/story/infinite-list';
import StoryLoading from '../../component/story/loading';

export default function Story() {
  const {
    loading, error, data, fetchMore,
  } = useQuery(gql`${getStoryInfo}`, {
    variables: {
      limit: 20,
    },
  });

  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const history = useHistory();

  document.body.style.backgroundColor = '#ffffff';

  if (loading) {
    return <StoryLoading />;
  }

  if (error) {
    history.push('/404');
  }

  const { listBasics: { items: stories, nextToken }, listImages: { items: images } } = data;

  const loadMore = async () => {
    try {
      setFetchMoreLoading(true);
      await fetchMore({
        variables: {
          nextToken,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          setFetchMoreLoading(false);
          if (
            fetchMoreResult
              && fetchMoreResult.listBasics.items
              && fetchMoreResult.listBasics.items.length
          ) {
            return {
              ...previousQueryResult,
              listBasics: {
                ...previousQueryResult.listBasics,
                items: [
                  ...previousQueryResult.listBasics.items,
                  ...fetchMoreResult.listBasics.items,
                ],
                nextToken: fetchMoreResult.listBasics.nextToken,
              },
            };
          }
          return previousQueryResult;
        },
      });
    } catch (e) {
      console.log('graphQL server error');
    }
  };

  return (
    <StoryInfiniteList
      stories={stories}
      images={images}
      onLoadMore={loadMore}
      hasNextPage={!!nextToken}
      loading={fetchMoreLoading}
    />
  );
}
