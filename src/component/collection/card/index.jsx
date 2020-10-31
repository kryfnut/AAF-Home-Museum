import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './index.scss';
import useImage from '../../../hooks/useImage';

const calc = (x, y) => [0, 0, 1.01];
const trans = (x, y, s) => `perspective(20px) scale(${s})`;

export default function CollectionCard({
  url, width, height, id, name,
}) {
  const { loading, error } = useImage(url);
  const [boxType, setBoxType] = useState(undefined);

  useEffect(() => {
    if (width > height) setBoxType('horizontal');
    else if (width < height) setBoxType('vertical');
    else setBoxType('square');
  }, [height, width]);

  const [props, set] = useSpring(
    () => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }),
  );

  if (loading) {
    return (
      <div className={`collection-card-loading-${boxType}`}>
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
  if (error) {
    return <div className={`collection-card-error-${boxType}`}>Ops... Error Happened!</div>;
  }
  return (
    <animated.div
      className={`collection-card-${boxType}`}
      // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        // transform: props.xys.interpolate(trans),
        backgroundImage: `url('${url}')`,
        position: 'relative',
        color: 'white',
      }}
    >
      <span style={{
        position: 'absolute',
        bottom: '-2.3vh',
        right: '0',
        fontSize: '12px',
      }}
      >
        {name}
      </span>
    </animated.div>
  );
}
