import { useState, useEffect } from 'react';

export default function useImage(url) {
  const [loading, load] = useState(true);
  const [error, setError] = useState(false);
  const [boxType, setBoxType] = useState(undefined);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    // eslint-disable-next-line func-names
    image.onload = function () {
      load(false);
      if (image.width > image.height) setBoxType('horizontal');
      else if (image.width < image.height) setBoxType('vertical');
      else setBoxType('square');
    };
    // eslint-disable-next-line func-names
    image.onerror = function (e) {
      setError(e);
    };
  }, [loading, error, url]);

  return {
    loading, error, boxType,
  };
}
