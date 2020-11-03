/* eslint-disable */
import React, {useState} from 'react';
import './index.scss';
import propTypes from 'prop-types';

export default function MenuItem({ title, icon, onClick, direction}) {

    const [clicked, setClick] = useState(false);

    let style = () => {
        if (direction === 'top-left')
            return  ({right: '2vw', bottom: '2vw'})
        if (direction === 'top-right')
            return  ({left: '2vw', bottom: '2vw'})
        if (direction === 'bottom-left')
            return  ({right: '2vw', top: '2vw'})
        if (direction === 'bottom-right')
            return  ({left: '2vw', top: '2vw'})
    }

  return (
    <div onClick={()=> {
        setClick(true);
        setTimeout(()=> {
            onClick()
        },500)
    }} className={clicked ? 'menu-item menu-item-clicked': 'menu-item'}>
      <span className={clicked ? 'menu-text menu-text-clicked' : 'menu-text'}>{title}</span>
      <img
          loading="lazy"
          crossOrigin="Anonymous"
          // style={{
          //     ...style()
          // }}
          className={clicked ? 'menu-icon menu-icon-clicked' : 'menu-icon'} src={icon} alt={title} />
    </div>
  );
}

MenuItem.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.any.isRequired,
  onClick: propTypes.func.isRequired,
};
