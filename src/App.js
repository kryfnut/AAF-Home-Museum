import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";

import BasicInformationTable from "./components/Table/BasicInformationTable";
import client from './components/GraphQL/AmazonApolloClient'



function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <BasicInformationTable/>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App;
