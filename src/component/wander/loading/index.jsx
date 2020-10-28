import React from 'react';
import './index.scss';

export default function WanderLoading() {
  return (
    <div className="wander-loading-container">
      <div className="wander-loading-lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
