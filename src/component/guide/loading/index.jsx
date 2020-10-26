import React from 'react';
import './index.scss';

export default function GuideLoading() {
  return (
    <div className="guide-loading-container">
        <div className="grid-loading-lds-ripple">
            <div />
            <div />
        </div>
    </div>
  );
}
