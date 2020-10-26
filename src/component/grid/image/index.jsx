import React, { useState } from 'react';
import CoolLightbox from '../../common/light-box';

import './index.scss';

export default function GridImageComponent({
  url, id, width, height,
}) {
  const [isOpen, setOpen] = useState(false);

  const images = [
    {
      src: url,
      alt: id,
      width,
      height,
    },
  ];

  let dpr;

  const { innerWidth, innerHeight } = window;

  if (width > height) dpr = innerWidth / width;
  else dpr = innerHeight / height;

  dpr *= 2.5;

  return (
    <div className="grid-image-component-container">
      <div className="grid-image-main">
        <div
          className="image"
          onClick={() => setOpen(true)}
          style={{
            width: width / dpr,
            height: height / dpr,
            backgroundImage: `url(${url})`,
          }}
        />
        <div className="go-text">go text</div>
        <div className="collect-btn">collect</div>
        <div className="close-btn">close</div>
      </div>
      <div className="grid-image-modal">
        <CoolLightbox
          currentImageIndex={0}
          setCurrentIndex={() => {}}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          images={images}
        />
      </div>
    </div>
  );
}
