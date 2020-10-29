import React, { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './index.scss';
import { useHistory } from 'react-router-dom';
import MenuContainer from '../../component/menu/menu-container';
import MenuItem from '../../component/menu/menu-item';
import MenuSlogan from '../../component/menu/menu-slogan';
import iconMenuCollection from '../../asset/icon-menu-collection.svg';
import iconMenuGuide from '../../asset/icon-menu-guide.svg';
import iconMenuStory from '../../asset/icon-menu-story.svg';
// import iconMenuWander from '../../asset/icon-menu-wander.svg';
import iconMenuWander from '../../asset/icon-double-eye.svg';

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const [color, setColor] = useState('');

  const handleClick = (c) => {
    setColor(c);
    setTimeout(() => {
      switch (c) {
        case 'guide':
          return history.push('/guide');
        case 'story':
          return history.push('/story');
        case 'wander':
          return history.push('/wander');
        default:
          return history.push('/404');
      }
    }, 1000);
  };

  // set body background
  document.body.style.backgroundColor = '#FFF59B';

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
      <div className="home-museum-menu-container">
        <div className={`container-mask-${color}`} />
        <MenuContainer
          menuItems={[
            <MenuItem direction="top-left" onClick={() => handleClick('wander')} key={3} icon={iconMenuWander} title="I Like To See" />,
            <MenuItem direction="top-right" onClick={() => handleClick('story')} key={2} icon={iconMenuStory} title="Tell Me A Story" />,
            <MenuItem direction="bottom-left" onClick={() => handleClick('guide')} key={1} icon={iconMenuGuide} title="Guide Me By Name" />,
            <MenuItem direction="bottom-right" onClick={() => handleClick('collection')} key={4} icon={iconMenuCollection} title="My Collection" />,
          ]}
          sloganComponent={(
            <MenuSlogan
              onClick={() => history.push('/about/main')}
              slogan="&nbsp;About Home Museum About Home Museum&nbsp;"
            />
)}
        />
      </div>
    </>
  );
}
