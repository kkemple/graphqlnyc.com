import React from 'react';
import glamorous from 'glamorous';
import { createNetworkInterface } from 'apollo-client';
import { ApolloProvider, ApolloClient } from 'react-apollo';

import Header from './header';
import GraphiQL from './graphiql';
import EventsList from './events';
import graphqlPattern from './graphql-pattern.png';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://w1z9m133z.lp.gql.zone/graphql'
  })
});

const App = glamorous.div({
  background: `url(${graphqlPattern})`,
  backgroundSize: '25px 25px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  '@media(max-width: 768px)': {
    display: 'block'
  }
});

export default () =>
  <ApolloProvider client={client}>
    <App>
      <Header />
      <GraphiQL />
      <EventsList />
    </App>
  </ApolloProvider>;
