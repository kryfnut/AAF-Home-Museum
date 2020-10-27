import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';
import './index.scss';
import { useTransition, animated } from 'react-spring';
import propTypes from 'prop-types';

function ArtTitle({ onJumpToMenu }) {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      fontFamily: 'B612, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '10vw',
      lineHeight: 1,
      textAlign: 'center',
      letterSpacing: '-0.03em',
      textTransform: 'capitalize',
      color: 'black',
      padding: '18px',
      // textShadow: '2px 2px black, -2px -2px black,2px -2px black, -2px 2px black',
      margin: '5vw',
    },
    enter: [
      {
        opacity: 1,
        height: 200,
        innerHeight: 200,
        fontFamily: 'B612, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10vw',
        lineHeight: 1,
        textAlign: 'center',
        letterSpacing: '-0.03em',
        textTransform: 'capitalize',
        color: 'black',
        padding: '18px',
        // textShadow: '2px 2px black, -2px -2px black,2px -2px black, -2px 2px black',
        margin: '5vw',
      },
      // {
      //   transform: 'perspective(600px) rotateX(40deg)',
      // },
      // {
      //   transform: 'perspective(600px) rotateX(0deg)',
      // },
    ],
    leave: [
      {
        innerHeight: 0,
        margin: '10vh',
      },
      {
        opacity: 0,
        margin: '10vh',
      },
    ],
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['HOME', 'MUSEUM']), 1000));
  }, []);

  const jumpToMenu = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([])));
    setTimeout(() => {
      onJumpToMenu();
    }, 1000);
  }, [onJumpToMenu]);

  useEffect(() => reset(), [reset]);

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={jumpToMenu}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  );
}

ArtTitle.propTypes = {
  onJumpToMenu: propTypes.func.isRequired,
};

export default ArtTitle;
