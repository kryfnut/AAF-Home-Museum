import {Amplify} from 'aws-amplify';
import {createAuthLink} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import {ApolloClient, InMemoryCache, HttpLink, ApolloLink} from '@apollo/client';


import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const url = awsconfig.aws_appsync_graphqlEndpoint;
const region = awsconfig.aws_appsync_region;
const auth = {
  type: awsconfig.aws_appsync_authenticationType,
  apiKey: awsconfig.aws_appsync_apiKey,
};

const httpLink = new HttpLink({uri: url});

const link = ApolloLink.from([
  createAuthLink({url, region, auth}),
  createSubscriptionHandshakeLink(url, httpLink)
]);

export default new ApolloClient({
  link,
  cache: new InMemoryCache()
})