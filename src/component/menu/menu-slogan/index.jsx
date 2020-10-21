/* eslint-disable */

import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function MenuSlogan({ slogan, onClick }) {
  return (
    <div
      onClick={onClick}
      className="menu-slogan"
    >
      <span className="menu-slogan-text">
        {slogan}
      </span>
    </div>
  );
}

MenuSlogan.propTypes = {
  slogan: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
