import React from 'react';
import './index.scss';

export default function GuideLoading() {
  return (
    <div className="guide-loading-container">
      <div className="guide-spinner">
        <div className="guide-loading-box-first" />
        <div className="guide-loading-box-second" />
      </div>
    </div>
  );
}
