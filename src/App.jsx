// React Module
import React from 'react';
// Amazon Module
import Amplify from 'aws-amplify';
// Third Part Import
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter } from 'react-router-dom';
// Apollo Client Customized
import client from './apollo-client';
import awsconfig from './aws-exports';
// Pages Routers
import Launcher from './page/launcher/launcher';

Amplify.configure(awsconfig);

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <BrowserRouter>
          <Launcher />
        </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
