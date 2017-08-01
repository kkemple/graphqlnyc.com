import React from 'react';
import glamorous from 'glamorous';
import { gql, graphql } from 'react-apollo';
import { format } from 'date-fns';

const QUERY = gql`
  query Events {
    events {
      time
      name
      description
      status
      link
    }
  }
`;

const Section = glamorous.div({
  width: '100%',
  '@media(min-width: 768px)': {
    display: 'none',
  },
});

const Event = glamorous.div({
  margin: '0 10px 10px',
  backgroundColor: 'white',
  borderRadius: '3px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
});

const EventDetail = glamorous.div({
  color: '#e535ab',
  marginBottom: '4px',
});

const ErrorView = glamorous.div({
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '3px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  padding: '10px',
  marginBottom: '15px',
});

const Loading = glamorous.h2({
  backgroundColor: 'white',
  color: '##e535ab',
  borderRadius: '3px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  padding: '10px',
  marginBottom: '15px',
});

const Events = ({ data, loading, error }) =>
  <Section>
    {error &&
      <ErrorView>
        {error}
      </ErrorView>}
    {loading && <Loading>Loading ...</Loading>}
    {data.events &&
      data.events.map(event =>
        <Event key={event.time}>
          <EventDetail>
            {event.name}
          </EventDetail>
          <EventDetail>
            {format(parseInt(event.time, 10), 'YYYY-MM-DD')}
          </EventDetail>
          <EventDetail>
            {event.status.toUpperCase()}
          </EventDetail>
          <EventDetail>
            <a href={event.link}>
              {event.link}
            </a>
          </EventDetail>
          <EventDetail>
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </EventDetail>
        </Event>,
      )}
  </Section>;

export default graphql(QUERY)(Events);
