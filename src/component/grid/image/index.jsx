import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CoolLightbox from '../../common/light-box';
import { Context } from '../../../context/context';

import './index.scss';

export default function GridImageComponent({
  url, id, width, height, image,
}) {
  const [isOpen, setOpen] = useState(false);
  const [context, setContext] = useContext(Context);
  const history = useHistory();

  let collection;

  if (context) {
    collection = context.collection;
  }

  // check if have collection
  if (!collection) {
    setContext({ ...context, collection: [] });
  }

  const collect = () => setContext({
    ...context,
    collection: [
      ...collection,
      {
        basicId: id, url, width, height,
      },
    ],
  });

  const uncollect = () => setContext({
    ...context,
    collection: collection.filter((_) => _.url !== url),
  });

  // check if have collected
  const collected = collection && collection
    .find(
      (picture) => picture.basicId === id && picture.url === url,
    );

  const images = [
    {
      src: url,
      alt: id,
      width,
      height,
    },
  ];

  return (
    <div className="grid-image-component-container">
      <div className="grid-image-main">
        <img
          crossOrigin="anonymous"
          src={url}
          alt={id}
          onClick={() => setOpen(true)}
        />
        <div
          className="go-text"
          onClick={() => history.replace(`/grid-view/information/${image}/${id}`)}
        />
        <div
          onClick={() => (collected ? uncollect() : collect())}
          className={collected ? 'collect-btn-collected' : 'collect-btn-uncollected'}
        />
        <div onClick={() => history.goBack()} className="close-btn" />
      </div>
      <div className="grid-image-modal">
        <CoolLightbox
          currentImageIndex={0}
          setCurrentIndex={() => {
          }}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          images={images}
        />
      </div>
    </div>
  );
}
