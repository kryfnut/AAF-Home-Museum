import React from 'react';
import propTypes from 'prop-types';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useHistory } from 'react-router-dom';
import './index.scss';

export default function StoryInfiniteList({
  loading, hasNextPage, onLoadMore, stories, images,
}) {
  const history = useHistory();

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore,
  });

  return (
    <div className="story-container">
      <div className="story-infinite-container">
        <div className="story-infinite-list">
          {
                    stories.map(({
                      firstName, lastName, title, description,
                    }) => (
                      <div className="story-item">
                        <h1 className="story-author">{`${lastName} ${firstName}`}</h1>
                        <div className="icon-eye" />
                        <p className="story-title">{title}</p>
                        <p className="story-content">{description}</p>
                      </div>
                    ))
                }
          <div className="load-more" />
        </div>
      </div>
      <div className="story-footer">
        <div className="story-title">
          TELL ME A STORY
        </div>
        <div className="story-search" />
        <div className="story-back-to-home" onClick={() => history.push('/home')} />
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
