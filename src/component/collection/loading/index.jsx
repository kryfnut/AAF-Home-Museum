import React from 'react';
import './index.scss';

export default function CollectionLoading() {
  return (
    <div className="collection-loading-container">
      <div className="collection-loading-lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
