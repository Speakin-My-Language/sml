import React, { useEffect } from 'react';
import MatchesInfo from './MatchesInfo';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// const fetch = require('node-fetch');

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
  //const background = 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg'
  const [background, setBackground] = React.useState('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg');
  const [matches, setMatches] = React.useState([]);
  const [renderedMatches, setRenderedMatches] = React.useState();

  useEffect(() => {
    async function getMatches() {
      // let response = await fetch('http://localhost:3000/matches');
      // response = await response.json();
      // console.log('matches list', response);
      let response = matches;
      const rendered = response.map((el, ind) => <MatchesInfo key={ind} match={el} />);
      setRenderedMatches(rendered);
      setMatches(response);
    }
    getMatches();
  }, []);

  return (
    <div style={{ minHeight: '1000px' }}>
    <Card id="sml" sx={{ minWidth: 275 }}>
      <CardContent>
          {renderedMatches}
      </CardContent>
      </Card>
  </div>
  );
}

export default MatchContainer;
