// React Module
import React from 'react';

// Third Part Import
import GoogleFontLoader from 'react-google-font-loader';

import { Context } from './context/context';

function AppUnsupported() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'B612',
            weights: [400, 700, 'lighter'],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        padding: '40px',
        background: 'radial-gradient(88.77% 88.77% at 50% 50%, rgba(255, 225, 225, 0.69) 0%, rgba(206, 216, 179, 0.69) 42.71%, rgba(180, 203, 216, 0.69) 65.56%, rgba(255, 240, 200, 0) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'B612',
        fontSize: '3vh',
      }}
      >
        PLEASE
        <br />
        USE PC OR TABLET
        <br />
        TO TO EXPLORE HOME MUSEUM
        <br />
        <br />
        THANKS
      </div>
    </>
  );
}

export default AppUnsupported;
