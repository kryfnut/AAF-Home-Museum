import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";

import BasicInformationTable from "./components/Table/BasicInformationTable";
import client from './components/GraphQL/AmazonApolloClient'

import {withAuthenticator} from '@aws-amplify/ui-react'

import Amplify, {Storage} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <BasicInformationTable/>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default withAuthenticator(App);
