import React from 'react';
import Amplify from 'aws-amplify';
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";
import client from './apollo-client';
import {withAuthenticator} from '@aws-amplify/ui-react'
import awsconfig from './aws-exports';
import Dashboard from "./page/Dashboard";

Amplify.configure(awsconfig);

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Dashboard/>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default withAuthenticator(App);
