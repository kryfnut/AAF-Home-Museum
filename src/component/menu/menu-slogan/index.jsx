/* eslint-disable */

import React from 'react';
import propTypes from 'prop-types';
import MarqueeText from 'react-marquee-text-component';
import './index.scss';

export default function MenuSlogan({ slogan, onClick }) {
  return (
    <div
      onClick={onClick}
      className="menu-slogan"
    >
      {/*<MarqueeText*/}
      {/*    text={slogan}*/}
      {/*    duration={8}*/}
      {/*    repeat={10}*/}
      {/*/>*/}
      {
        "Welcome To Home Museum"
      }
    </div>
  );
}

MenuSlogan.propTypes = {
  slogan: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
