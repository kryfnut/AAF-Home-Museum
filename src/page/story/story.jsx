import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { getStoryInfo } from '../../graphql/queries';
import StoryInfiniteList from '../../component/story/infinite-list';
import StoryLoading from '../../component/story/loading';

let contactsForRender;

const generateCharactersMap = () => {
  const chartAt = 65;
  const _ = {};
  for (let i = 0; i < 26; i += 1) {
    _[String.fromCharCode(chartAt + i)] = [];
  }
  return _;
};

export default function Story() {
  const {
    loading, error, data, fetchMore,
  } = useQuery(gql`${getStoryInfo}`, {
    variables: {
      limit: 300,
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
    return <StoryLoading />;
  }

  const { listBasics: { items: stories, nextToken }, listImages: { items: images } } = data;

  //
  // stories = stories.sort((a, b) => {
  //   if (a.lastName.localeCompare(b.lastName) === 0) {
  //     return a.firstName.localeCompare(b.firstName);
  //   }
  // });

  const charactersMap = generateCharactersMap();

  if (!contactsForRender) {
    stories.forEach((contact) => {
      const { lastName } = contact;
      if (charactersMap[lastName.substr(0, 1).toUpperCase()].length === 0) {
        charactersMap[lastName.substr(0, 1).toUpperCase()]
            .push(
                {
                  ...contact,
                  // character: lastName.substr(0, 1).toUpperCase(),
                },
            );
      } else {
        charactersMap[lastName.substr(0, 1).toUpperCase()].push(contact);
      }
    });

    Object.keys(charactersMap)
        .forEach(key=> {
          charactersMap[key] = charactersMap[key].sort((a, b) => a.lastName.localeCompare(b.lastName));
          charactersMap[key][0] = {
            ...charactersMap[key][0],
            character: charactersMap[key][0].lastName.substr(0, 1).toUpperCase(),
          }
        })

    contactsForRender = Object.keys(charactersMap)
        .map((key) => [...charactersMap[key]])
        .flat();
  }

  // const loadMore = async () => {
  //   try {
  //     setFetchMoreLoading(true);
  //     await fetchMore({
  //       variables: {
  //         nextToken,
  { /*      }, */ }
  //       updateQuery: (previousQueryResult, { fetchMoreResult }) => {
  //         setFetchMoreLoading(false);
  //         if (
  //           fetchMoreResult
  //             && fetchMoreResult.listBasics.items
  //             && fetchMoreResult.listBasics.items.length
  //         ) {
  //           return {
  //             ...previousQueryResult,
  { /*            listBasics: { */ }
  //               ...previousQueryResult.listBasics,
  //               items: [
  //                 ...previousQueryResult.listBasics.items,
  //                 ...fetchMoreResult.listBasics.items,
  { /*              ], */ }
  { /*              nextToken: fetchMoreResult.listBasics.nextToken, */ }
  { /*            }, */ }
  //           };
  //         }
  //         return previousQueryResult;
  //       },
  //     });
  //   } catch (e) {
  //     console.log('graphQL server error');
  //   }
  // };

  return (
    <StoryInfiniteList
      stories={contactsForRender}
      images={images}
      onLoadMore={() => {}}
      hasNextPage={!!nextToken}
      loading={fetchMoreLoading}
    />
  );
}
