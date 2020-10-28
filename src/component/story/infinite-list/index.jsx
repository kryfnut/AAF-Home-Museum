import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useHistory } from 'react-router-dom';
import { Context } from '../../../context/context';
import './index.scss';

export default function StoryInfiniteList({
  loading, hasNextPage, onLoadMore, stories, images,
}) {
  const history = useHistory();
  const [context, setContext] = useContext(Context);

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore,
  });

  if (context) {
    const { storyPageScrollTop } = context;
    if (typeof storyPageScrollTop !== 'number') {
      // context.storyPageScrollTop = 0;
      setContext({ ...context, storyPageScrollTop: 0 });
    }
  }

  useEffect(() => {
    setContext({
      ...context,
      contacts: stories,
    });
  }, [stories]);

  useEffect(() => {
    if (context && context.storyPageScrollTop && infiniteRef.current) {
      infiniteRef.current.scrollTop = context.storyPageScrollTop;
    }
  }, [context, infiniteRef]);

  return (
    <div className="story-container">
      <div className="story-infinite-container">
        <div ref={infiniteRef} className="story-infinite-list">
          {
                    stories.map(({
                      firstName, lastName, title, description, id,
                    }) => (
                      <div className="story-item">
                        <h1 className="story-author">{`${lastName} ${firstName}`}</h1>
                        {
                              images.findIndex((item) => item.basicId === id) !== -1
                                ? (
                                  <div
                                    onClick={() => {
                                      setContext({
                                        ...context,
                                        storyPageScrollTop: infiniteRef.current.scrollTop,
                                      });
                                      history.push(`/grid/${id}`);
                                    }}
                                    className="icon-eye"
                                  />
                                )
                                : null
                          }
                        <p className="story-title">{title}</p>
                        <p className="story-content">{description}</p>
                      </div>
                    ))
                }
          {
                loading ? <div>loading....</div> : null
            }
        </div>
      </div>
      <div className="story-footer">
        <div className="story-title">
          TELL ME A STORY
        </div>
        <div className="story-search" />
        <div className="story-back-to-home" onClick={() => history.goBack()} />
      </div>
    </div>
  );
}

StoryInfiniteList.propTypes = {
  loading: propTypes.bool,
  hasNextPage: propTypes.bool,
  onLoadMore: propTypes.func,
  stories: propTypes.array.isRequired[Symbol.hasInstance],
  images: propTypes.array.isRequired[Symbol.hasInstance],
};

StoryInfiniteList.defaultProps = {
  loading: true,
  hasNextPage: true,
  onLoadMore: () => {},
  stories: [],
  images: [],
};
