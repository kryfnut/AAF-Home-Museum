import React from 'react';
import {Amplify} from 'aws-amplify';
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";
import client from './apollo-client';
import {withAuthenticator} from '@aws-amplify/ui-react'
import awsconfig from './aws-exports';
import Dashboard from "./page/Dashboard";
import {BrowserRouter as Router} from "react-router-dom";

Amplify.configure(awsconfig);

function App() {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <Router>
                    <Dashboard/>
                </Router>
            </ApolloHooksProvider>
        </ApolloProvider>
    )
}

export default withAuthenticator(App);
