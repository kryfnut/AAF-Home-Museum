// React Module
import React, { useState } from 'react';
// Amazon Module
import Amplify from 'aws-amplify';
// Third Part Import
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';

import { Context } from './context/context';
// Apollo Client Customized
import client from './apollo-client';
import awsconfig from './aws-exports';
// Pages Routers
import GridRouterSwitch from './component/common/grid-router-switch';
import AboutRouterSwitch from './component/common/about-router-switch';
import Launcher from './page/launcher/launcher';
import Homepage from './page/homepage/homepage';
import Menu from './page/menu/menu';
import Guide from './page/guide/guide';
import Story from './page/story/story';
import Grid from './page/grid/grid';
import Wander from './page/wander/wander';
import Error from './page/error/Error';

// TODO move all collection routes to a switch
import Collection from './page/collection/collection';
import EntranceNope from './page/collection/entrance-nope/entrance-nope';
import Entrance from './page/collection/entrance/entrance';

Amplify.configure(awsconfig);

function App() {
  const [context, setContext] = useState(null);
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
      <Context.Provider value={[context, setContext]}>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <BrowserRouter>
              <Switch>
                {/* Launcher: Pics Gallery */}
                <Route exact path="/">
                  <Launcher />
                </Route>
                {/* Home Page: HOME MUSEUM Display */}
                <Route exact path="/home">
                  <Homepage />
                </Route>
                {/* Menu Selection */}
                <Route exact path="/menu">
                  <Menu />
                </Route>
                {/* Guide Me By Name */}
                <Route exact path="/guide">
                  <Guide />
                </Route>
                {/* Tell Me A Story */}
                <Route exact path="/story">
                  <Story />
                </Route>
                <Route exact path="/wander">
                  <Wander />
                </Route>
                {/* User Detail Grid */}
                <Route exact path="/grid/:id">
                  <Grid />
                </Route>
                <Route exact path="/collection">
                  <Collection />
                </Route>
                <Route exact path="/entrance-nope">
                  <EntranceNope />
                </Route>
                <Route exact path="/entrance">
                  <Entrance />
                </Route>
                <Route path="/grid-view">
                  <GridRouterSwitch />
                </Route>
                <Route path="/about">
                  <AboutRouterSwitch />
                </Route>
                <Route path="/404">
                  <Error />
                </Route>
                <Route>
                  <Error />
                </Route>

              </Switch>
            </BrowserRouter>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Context.Provider>
    </>
  );
}

export default App;
