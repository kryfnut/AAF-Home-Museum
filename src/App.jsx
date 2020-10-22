// React Module
import React from 'react';
// Amazon Module
import Amplify from 'aws-amplify';
// Third Part Import
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route } from 'react-router-dom';

// Apollo Client Customized
import GoogleFontLoader from 'react-google-font-loader';
import client from './apollo-client';
import awsconfig from './aws-exports';
// Pages Routers
import Launcher from './page/launcher/launcher';
import Homepage from './page/homepage/homepage';
import Menu from './page/menu/menu';
import Guide from './page/guide/guide';

Amplify.configure(awsconfig);

function App() {
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
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <BrowserRouter>
            <Route exact path="/">
              <Launcher />
            </Route>
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/menu">
              <Menu />
            </Route>
            <Route exact path="/guide">
              <Guide />
            </Route>
          </BrowserRouter>
        </ApolloHooksProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
