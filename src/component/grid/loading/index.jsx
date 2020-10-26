import React from 'react';
import './index.scss';

export default function GridLoading() {
  return (
    <div className="grid-loading-container">
        <div className="grid-loading-lds-ripple">
            <div />
            <div />
        </div>
    </div>
  );
}
