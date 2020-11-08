import { useState, useEffect } from 'react';

export default function useImage(url) {
  const [loading, load] = useState(true);
  const [error, setError] = useState(false);
  const [boxType, setBoxType] = useState(undefined);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = url;
    // eslint-disable-next-line func-names
    image.onload = function () {
      if (image.width > image.height) setBoxType('horizontal');
      else if (image.width < image.height) setBoxType('vertical');
      else setBoxType('square');
      setWidth(image.width);
      setHeight(image.height);
      load(false);
    };
    // eslint-disable-next-line func-names
    image.onerror = function (e) {
      setError(e);
    };
  }, [loading, error, url]);

  return {
    loading, error, boxType, width, height,
  };
}
