/* eslint-disable */
import React, {useState} from 'react';
import './index.scss';
import propTypes from 'prop-types';

export default function MenuItem({ title, icon, onClick }) {

    const [clicked, setClick] = useState(false);

  return (
    <div onClick={()=> {
        setClick(true);
        setTimeout(()=> {
            onClick()
        },500)
    }} className={clicked ? 'menu-item menu-item-clicked': 'menu-item'}>
      <span className={clicked ? 'menu-text menu-text-clicked' : 'menu-text'}>{title}</span>
      <img className={clicked ? 'menu-icon menu-icon-clicked' : 'menu-icon'} src={icon} alt={title} />
    </div>
  );
}

MenuItem.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.any.isRequired,
  onClick: propTypes.func.isRequired,
};
