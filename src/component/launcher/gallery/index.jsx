import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import SpringAnimatedImage from '../../common/spring-animated-image';
import './index.scss';
import LauncherLoading from '../loading';

const IMAGE_URL_PREFIX = 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/';
const { innerHeight, innerWidth } = window;

// 生成从minNum到maxNum的随机数
function num(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}

function getAorB(A, B) {
  return [A, B][Math.round(Math.random())];
}

const X = Symbol('x');
const Y = Symbol('y');

// aha fake random
const makeImagePositionRandom = (images) => images.map(({
  id, url, width, height,
}) => {
  const dpr = 1.4;
  const scale = innerWidth / width < dpr ? Math.ceil((width * 3) / innerWidth) : dpr;
  // eslint-disable-next-line no-param-reassign
  width /= scale;
  // eslint-disable-next-line no-param-reassign
  height /= scale;

  const makeImageFloatInRandom = (axis) => (axis === X
    ? getAorB(num(-width * 3, width), num(innerWidth + width, innerWidth + width * 3))
    : getAorB(num(-height * 3, height), num(innerHeight + height, innerHeight + height * 3)));

  return {
    id,
    url,
    width,
    height,
    startX: makeImageFloatInRandom(X),
    startY: makeImageFloatInRandom(Y),
    endX: num(-width / 2, innerWidth - width / 2),
    endY: num(-height / 2, innerHeight - height / 2),
  };
});

export default function LauncherGallery({
  images, resetInterval, setCurrentInterval,
}) {
  const [loaded, load] = useState(false);

  resetInterval();
  useEffect(() => {
    Promise.all(images.map((image) => new Promise((resolve, reject) => {
      const img = new Image();
      img.src = IMAGE_URL_PREFIX + image.url;
      img.onload = () => resolve();
      img.onerror = (e) => reject(e);
    })))
      .then(() => setCurrentInterval() || load(true))
      .catch(() => resetInterval() || load(false));
  }, []);

  if (!loaded) {
    return (
      <div className="launcher-gallery-container">
        <LauncherLoading />
      </div>
    );
  }

  return (
    <div className="launcher-gallery-container">
      {
              makeImagePositionRandom(images).map(({
                id, url, width, height, startX, startY, endX, endY,
              }) => (
                <SpringAnimatedImage
                  key={id}
                  url={IMAGE_URL_PREFIX + url}
                  startX={startX}
                  startY={startY}
                  endX={endX}
                  endY={endY}
                  width={width}
                  height={height}
                  duration={3000}
                />
              ))
          }
    </div>
  );
}

LauncherGallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: propTypes.array.isRequired,
  resetInterval: propTypes.func.isRequired,
  setCurrentInterval: propTypes.func.isRequired,
};
