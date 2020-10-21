import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function MenuContainer({ menuItems, sloganComponent }) {
  return (
    <div className="menu-container">
      <div className="menu-item-container menu-item-top-container">
        {menuItems.slice(0, 2)}
      </div>
      <div className="slogan-container">
        {sloganComponent}
      </div>
      <div className="menu-item-container menu-item-bottom-container">
        {menuItems.slice(2, 4)}
      </div>
    </div>
  );
}

MenuContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  menuItems: propTypes.array.isRequired,
  sloganComponent: propTypes.element.isRequired,
};
