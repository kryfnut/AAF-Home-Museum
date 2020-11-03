import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextLoadState from '../../../component/collection/entrance/context-load-state';
import './index.scss';

export default function EntranceNope() {
  const history = useHistory();
  const [state, setState] = useState(false);
  const [id, setID] = useState('');

  return (
    <div className="entrance-container">
      <div className="entrance">
        <p>You have not added Photographs to your collection.</p>
        <br />
        <p>If you already created a Collection, enter your Personal Key to open it.</p>
        <div className="input-group">
          <input
            value={id}
            onChange={(e) => setID(e.target.value)}
            className="entrance-input"
            type="text"
          />
          <button onClick={() => setState(true)} className="entrance-button">OK</button>
        </div>
        <div className="loading-state">
          {
                  state && (
                  <ContextLoadState
                    id={id}
                    onLoad={(loaded) => {
                      setState(false);
                      if (loaded) history.push('/collection');
                    }}
                  />
                  )
              }
        </div>
      </div>
      <div className="entrance-footer">
        <div className="title">MY COLLECTION</div>
        <div
          onClick={() => history.replace('/menu')}
          className="go-home"
        />
      </div>
    </div>
  );
}
