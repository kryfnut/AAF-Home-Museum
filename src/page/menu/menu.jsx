import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './index.scss';
import { useHistory } from 'react-router-dom';
import MenuContainer from '../../component/menu/menu-container';
import MenuItem from '../../component/menu/menu-item';
import MenuSlogan from '../../component/menu/menu-slogan';
import iconMenuCollection from '../../asset/icon-menu-collection.svg';
import iconMenuGuide from '../../asset/icon-menu-guide.svg';
import iconMenuStory from '../../asset/icon-menu-story.svg';
import iconMenuWander from '../../asset/icon-menu-wander.svg';

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

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
        <MenuContainer
          menuItems={[
            <MenuItem key={1} icon={iconMenuGuide} title="Guide Me By Name" />,
            <MenuItem key={2} icon={iconMenuStory} title="Tell Me A Story" />,
            <MenuItem key={3} icon={iconMenuWander} title="I Like To See" />,
            <MenuItem key={4} icon={iconMenuCollection} title="My Collection" />,
          ]}
          sloganComponent={<MenuSlogan slogan="About Home Museum" />}
        />
      </div>
    </>
  );
}
