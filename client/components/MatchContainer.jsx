import React, { useEffect } from 'react';
const fetch = require('node-fetch');
import MatchesInfo from './MatchesInfo';

const matches = [
  {
    name: 'Yale',
    email: 'yale@email.com',
    location: 'Yale York',
    company: 'Yale inc',
    website: 'www.yale.com',
    handle: '@yale',
  },
  {
    name: 'Matt',
    email: 'matt@email.com',
    location: 'Matt York',
    company: 'Matt inc',
    website: 'www.matt.com',
    handle: '@matt',
  },
];

function MatchContainer() {
  const [background, setBackground] = React.useState('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg');

  useEffect(() => {
    fetch('http://localhost:3000');
  }, []);

  return (
    <div style={{ minHeight: '1000px', background: `url(${background})` }}>
      {matches.map((el) => <MatchesInfo match={el} />)}
    </div>
  );
}

export default MatchContainer;
