import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';
import './index.scss';
import Notifications, { notify } from 'react-notify-toast';
import copy from 'clipboard-copy';
import useImage from '../../../hooks/useImage';

const calc = (x, y) => [0, 0, 1.01];
const trans = (x, y, s) => `perspective(20px) scale(${s})`;

export default function GridCard({
  url, width, height, image, id, contact,
}) {
  const { loading, error } = useImage(url);
  const [boxType, setBoxType] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    if (width > height) setBoxType('horizontal');
    else if (width < height) setBoxType('vertical');
    else setBoxType('square');
  }, [height, width]);

  // const [props, set] = useSpring(
  //   () => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }),
  // );

  if (loading) {
    return (
      <div className={`grid-card-loading-${boxType}`}>
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
    return <div className={`grid-card-error-${boxType}`}>Ops... Error Happened!</div>;
  }
  return (
    <div>
      <animated.div
        className={`grid-card-${boxType}`}
        onClick={() => copy(id)}
          // onClick={() => history.push(`/grid-view/image/${encodeURIComponent(image)}/${id}`)}
          // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          // onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          // transform: props.xys.interpolate(trans),
          backgroundImage: `url('${url}')`,
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
