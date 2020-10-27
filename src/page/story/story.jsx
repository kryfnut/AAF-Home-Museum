import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { getStoryInfo } from '../../graphql/queries';
import StoryInfiniteList from '../../component/story/infinite-list';
import StoryLoading from '../../component/story/loading';

export default function Story() {
  const {
    loading, error, data, fetchMore,
  } = useQuery(gql`${getStoryInfo}`, {
    variables: {
      limit: 50,
    },
  });

  const [hasMore, setHasMore] = useState(true);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);

  document.body.style.backgroundColor = '#ffffff';

  const setEnded = () => setHasMore(false);

  if (loading) {
    return <StoryLoading />;
  }

  // TODO error handler
  if (error) {
    return <div>{error.message}</div>;
  }

  const { listBasics: { items: stories, nextToken }, listImages: { items: images } } = data;

  const loadMore = () => setFetchMoreLoading(true) || fetchMore({
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
        if (!fetchMoreResult.listBasics.nextToken) {
          setEnded();
        }
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

  return (
    <StoryInfiniteList
      stories={stories}
      images={images}
      onLoadMore={loadMore}
      hasNextPage={hasMore}
      loading={fetchMoreLoading}
    />
  );
}
