import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './index.scss';
import ArtTitle from '../../component/homepage/art-title';

export default function Homepage() {
  return (
    <>
      {/* Use it! */}
      <GoogleFontLoader
        fonts={[
          {
            font: 'B612',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <div className="home-museum-container">
        <ArtTitle />
        {/* <p className="home-museum-title">HOME</p> */}
        {/* <p className="home-museum-title">MUSEUM</p> */}
      </div>
    </>
  );
}
