import React from 'react';
import glamorous from 'glamorous';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

function graphQLFetcher(graphQLParams) {
  return fetch('https://w1z9m133z.lp.gql.zone/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}

const QUERY = `
  query Events {
    events {
      date
      name
      description
      upcoming
      link
    }
  }
`;

const Section = glamorous.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  '@media(max-width: 768px)': {
    display: 'none'
  }
});

const GraphiQLContainer = glamorous.div({
  width: '100%',
  maxWidth: '1280px',
  padding: '20px',
  minHeight: '400px'
});

export default () =>
  <Section>
    <GraphiQLContainer>
      <GraphiQL fetcher={graphQLFetcher} query={QUERY} />
    </GraphiQLContainer>
  </Section>;
