import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';
import './index.scss';
import { useTransition, animated } from 'react-spring';
import propTypes from 'prop-types';

function ArtTitle({ onJumpToMenu }) {
  const [num, plus] = useState(0);
  const transitions = useTransition(num, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      num === 2 ? plus(0) : plus(num + 1);
    }, 1500);
  }, [num]);

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => {
        if (item === 0) {
          return (
            <animated.div className="transitions-item" key={key} style={rest} onClick={onJumpToMenu}>
              <animated.div style={{ overflow: 'visible' }}>
                LagosPhotos20
              </animated.div>
            </animated.div>
          );
        } if (item === 1) {
          return (
            <animated.div className="transitions-item" key={key} style={rest} onClick={onJumpToMenu}>
              <animated.div style={{ overflow: 'visible' }}>
                Rapid Response
                <br />
                <br />
                {' '}
                Restitution
              </animated.div>
            </animated.div>
          );
        }
        return (
          <animated.div className="transitions-item" key={key} style={rest} onClick={onJumpToMenu}>
            <animated.div style={{ overflow: 'visible' }}>
              HOME
              <br />
              <br />
              {' '}
              MUSEUM
            </animated.div>
          </animated.div>
        );
      })}
    </div>
  );
}

ArtTitle.propTypes = {
  onJumpToMenu: propTypes.func.isRequired,
};

export default ArtTitle;
