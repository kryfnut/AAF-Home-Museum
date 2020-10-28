import React from 'react';
import { animated, useTransition } from 'react-spring';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import GridImage from '../../../page/grid/image/image';
import GridInformation from '../../../page/grid/information/information';
import Grid from '../../../page/grid/grid';

export default function GridRouterSwitch() {
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
        <animated.div key={key} style={props} className="absolute">
          <Switch location={l}>
            <Route path="/grid-view/image/:url/:id" exact>
              <GridImage />
            </Route>
            <Route path="/grid-view/information/:url/:id" exact>
              <GridInformation />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </>
  );
}
