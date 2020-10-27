import React from 'react';
import './index.scss';

export default function StoryLoading() {
  return (
    <div className="story-loading-container">
      <div className="story-loading-lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
