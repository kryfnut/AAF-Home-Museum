import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import ArtTitle from '../../component/homepage/art-title';

export default function Homepage() {
  const history = useHistory();

  // set body background
  document.body.style.backgroundColor = '#FFF59B';

  return (
    <div className="home-museum-container">
      <ArtTitle onJumpToMenu={() => history.push('/menu')} />
      {/* <p className="home-museum-title">HOME</p> */}
      {/* <p className="home-museum-title">MUSEUM</p> */}
    </div>
  );
}
