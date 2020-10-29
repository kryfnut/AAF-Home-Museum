import React from 'react';
import './index.scss';
// import { useHistory } from 'react-router-dom';

export default function Error() {
  // const history = useHistory();

  document.body.style.backgroundColor = 'transparent';
  document.body.style.backgroundColor = 'radial-gradient(88.77% 88.77% at 50% -8.73%, rgba(255, 225, 225, 0.69) 0%, rgba(206, 216, 179, 0.69) 42.71%, rgba(180, 203, 216, 0.69) 65.56%, rgba(255, 240, 200, 0) 100%)';

  return (
    <div className="error-container">
      <div className="error">
        <div
          onClick={() => window.location.href = '/'}
          className="error-btn"
        />
        <div
          className="error-content"
        >
          oops... An unexpected Error Happened!
        </div>
      </div>
    </div>
  );
}
