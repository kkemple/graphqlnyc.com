import React from 'react';
import glamorous from 'glamorous';

const Header = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  '@media(max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: '40px'
  }
});

const Menu = glamorous.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '@media(max-width: 768px)': {
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
});

const MenuItem = glamorous.li({
  paddingLeft: '10px',
  paddingRight: '10px'
});

const Link = glamorous.a({
  color: 'white',
  fontSize: '24px',
  textDecoration: 'none',
  cursor: 'pointer',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
  ':hover': {
    textDecoration: 'underline'
  },
  '@media(max-width: 768px)': {
    fontSize: '20px'
  }
});

const Title = glamorous.h1({
  color: 'white',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
  '@media(max-width: 768px)': {
    textAlign: 'center'
  }
});

export default () =>
  <Header>
    <Title>GraphQL NYC</Title>
    <Menu>
      <MenuItem>
        <Link href="https://www.meetup.com/GraphQL-NYC/">Meet</Link>
      </MenuItem>
      <MenuItem>
        <Link href="https://www.graphql.com/">Explore</Link>
      </MenuItem>
      <MenuItem>
        <Link href="https://launchpad.graphql.com">Play</Link>
      </MenuItem>
      <MenuItem>
        <Link href="http://graphql.org/learn/">Learn</Link>
      </MenuItem>
      <MenuItem>
        <Link href="https://github.com/graphql/graphql-js/">Contribute</Link>
      </MenuItem>
    </Menu>
  </Header>;
