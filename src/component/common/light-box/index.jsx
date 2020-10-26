import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-spring-lightbox';
import styled from 'styled-components';
import Color from 'color';

/**
 * Double click + pinch to zoom
 * Keyboard Left/Right + swipe to page
 * Keyboard Esc to close
 *
 * @see https://github.com/tim-soft/react-spring-lightbox
 * @see https://timellenberger.com
 */
const CoolLightbox = ({
  images,
  currentImageIndex,
  setCurrentIndex,
  isOpen,
  onClose,
}) => {
  const gotoPrevious = () => currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () => currentImageIndex + 1 < images.length
        && setCurrentIndex(currentImageIndex + 1);

  return (
    <StyledLightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      onClose={onClose}
      images={images}
      currentIndex={currentImageIndex}
      singleClickToZoom
    />
  );
};

CoolLightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ),
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CoolLightbox;

const StyledLightbox = styled(Lightbox)`
  background: ${({ theme }) => Color(theme.accentColor)
    .alpha(0.95)
    .hsl()
    .string()};
  * ::selection {
    background: ${({ theme }) => theme.pageContentSelectionColor};
  }
  * ::-moz-selection {
    background: ${({ theme }) => new Color(theme.pageContentSelectionColor).darken(0.57).hex()};
  }
`;
