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
    location: 'Yale York',
    handle: '@yale',
    twitter: 'yale_university',
    company: 'Yale inc',
    website: 'www.yale.com',
    email: 'yale@email.com',
    bio: "I am Yale.",
    languages: {
      'Javascript': 49040,
      'Python': 34800,
      'C': 9000,
    }
  },
  {
    name: 'Eric',
    location: 'Eric Hagen-Daz',
    handle: '@eric',
    twitter: '@eric',
    company: 'eric inc',
    website: 'www.eric.com',
    email: 'eric@email.com',
    bio: "I am eric.",
    languages: {
      'Javascript': 49040,
      'Python': 34800,
      'C': 9000,
    }
  },
  {
    name: 'Mireille',
    location: 'mireille Hagen-Daz',
    handle: '@mireille',
    twitter: '@mireille',
    company: 'mireille inc',
    website: 'www.mireille.com',
    email: 'mireille@email.com',
    bio: "I am mireille.",
    languages: {
      'Javascript': 49040,
      'Python': 34800,
      'C': 9000,
    }
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
          {/* {renderedMatches} */}
          <p>PAY NOW</p>
          <p>YOU HAVE NOT PAID YET</p>
          <p>PLEASE PAY OR OR YOU WILL</p>
          <h1>PAIR ALONE 4eva!!!!</h1>
      </CardContent>
      </Card>
  </div>
  );
}

export default MatchContainer;
