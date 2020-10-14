import React from 'react';
import './index.scss';

export default function LauncherLoading() {
  return (
    <div className="launcher-loading-container">
      <div className="launcher-loading-lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
