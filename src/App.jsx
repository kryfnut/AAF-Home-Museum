// React Module
import React, { useState } from 'react';
// Amazon Module
import Amplify from 'aws-amplify';
// Third Part Import
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';

import { Context } from './context/context';
// Apollo Client Customized
import client from './apollo-client';
import awsconfig from './aws-exports';
// Pages Routers
import Launcher from './page/launcher/launcher';
import Homepage from './page/homepage/homepage';
import Menu from './page/menu/menu';
import Guide from './page/guide/guide';
import Grid from './page/grid/grid';

Amplify.configure(awsconfig);

function App() {
  const [context, setContext] = useState(null);
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'B612',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <Context.Provider value={[context, setContext]}>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <BrowserRouter>
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
              {/* User Detail Grid */}
              <Route exact path="/grid/:id">
                <Grid />
              </Route>
            </BrowserRouter>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Context.Provider>
    </>
  );
}

export default App;
