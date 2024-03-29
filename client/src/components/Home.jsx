import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header } from 'semantic-ui-react';
import './Home.css';

const Home = () => {
  return (
    <Segment.Group className="container">
      <Header>Home</Header>
      <Segment className="item">
        <Link to={'/'}>Go to Vote Page</Link>
      </Segment>
      <Segment className="item">
        <Link to={'/organizer'}>Go to Organizer Page</Link>
      </Segment>
      <Segment className="item">
        <Link to={'/check'}>Check Time Key </Link>
      </Segment>
    </Segment.Group>
  );
};

export default Home;
