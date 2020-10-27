import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import ArtTitle from '../../component/homepage/art-title';

export default function Homepage() {
  const history = useHistory();

  // set body background
  document.body.style.backgroundColor = 'radial-gradient(88.77% 88.77% at 50% 50%, rgba(255, 225, 225, 0.69) 0%, rgba(206, 216, 179, 0.69) 42.71%, rgba(180, 203, 216, 0.69) 65.56%, rgba(255, 240, 200, 0) 100%)';

  return (
    <div className="home-museum-container">
      <ArtTitle onJumpToMenu={() => history.push('/menu')} />
      {/* <p className="home-museum-title">HOME</p> */}
      {/* <p className="home-museum-title">MUSEUM</p> */}
    </div>
  );
}
