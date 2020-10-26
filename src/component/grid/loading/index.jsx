import React from 'react';
import './index.scss';

export default function GridLoading() {
  return (
    <div className="grid-loading-container">
      <div className="grid-spinner">
        <div className="grid-loading-box-first" />
        <div className="grid-loading-box-second" />
      </div>
    </div>
  );
}
