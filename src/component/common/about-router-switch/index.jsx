import React from 'react';
import { animated, useTransition } from 'react-spring';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import './index.scss';
import About from '../../../page/about/about';
import AboutPage from '../../../page/about/page/page';
import AboutColophon from '../../../page/about/colophon';
import AboutBiographies from '../../../page/about/biographies';
import AboutPrivacy from '../../../page/about/privacy';

export default function AboutRouterSwitch() {
  const location = useLocation();
  const transitions = useTransition(location, (l) => l.pathname, {
    // initial: null,
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX:(-50%)' },
    unique: true,
    reset: true,
  });
  return (
    <>
      {transitions.map(({ item: l, props, key }) => (
        <animated.div key={key} style={props} className="about-grid">
          <Switch location={l}>
            <Route path="/about/main" exact>
              <About />
            </Route>
            <Route exact path="/about/page/:page">
              <AboutPage />
            </Route>
            <Route exact path="/about/colophon">
              <AboutColophon />
            </Route>
            <Route exact path="/about/bio">
              <AboutBiographies />
            </Route>
            <Route exact path="/about/privacy">
              <AboutPrivacy />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </>
  );
}
