// React Module
import React from 'react';
// Amazon Module
import Amplify from 'aws-amplify';
// Third Part Import
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter, Route } from 'react-router-dom';

// Apollo Client Customized
import client from './apollo-client';
import awsconfig from './aws-exports';
// Pages Routers
import Launcher from './page/launcher/launcher';
import Homepage from './page/homepage/homepage';

Amplify.configure(awsconfig);

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <BrowserRouter>
          <Route exact path="/home">
            <Launcher />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
