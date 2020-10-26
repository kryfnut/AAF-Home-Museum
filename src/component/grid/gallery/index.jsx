import React from 'react';
import propTypes from 'prop-types';
import GridCard from '../card';
import './index.scss';

export default function GridGallery({
  prev, next, images, contact,
}) {
  const { lastName, firstName, id } = contact;

  return (
    <div className="grid-gallery-container">
      <div className="grid-gallery">
        {
                images
                  .map(
                    ({
                      // url is an https url, and image is the key in the bucket
                      width, height, url, image,
                    }) => (
                      <GridCard
                        id={id}
                        image={image}
                        key={url}
                        width={width}
                        height={height}
                        url={url}
                      />
                    ),
                  )
            }
      </div>
      <div className="guide-footer">
        <div className="contact-name">{`${lastName} ${firstName}`}</div>
        <div className="guide-tool" />
      </div>
    </div>
  );
}

GridGallery.propTypes = {
  prev: propTypes.string,
  next: propTypes.string,
  images: propTypes.array.isRequired[Symbol.hasInstance],
  contact: propTypes.object.isRequired[Symbol.hasInstance],
};

GridGallery.defaultProps = {
  prev: undefined,
  next: undefined,
  images: [],
  contact: {},
};
