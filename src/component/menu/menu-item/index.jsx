/* eslint-disable */
import React from 'react';
import './index.scss';
import propTypes from 'prop-types';

export default function MenuItem({ title, icon, onClick }) {
  return (
    <div onClick={onClick} className="menu-item">
      <span className="menu-text">{title}</span>
      <img className="menu-icon" src={icon} alt={title} />
    </div>
  );
}

MenuItem.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.any.isRequired,
  onClick: propTypes.func.isRequired,
};
