import React, { useEffect } from 'react';
import MatchesInfo from './MatchesInfo';

// const fetch = require('node-fetch');

function MatchContainer() {
  //const background = 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg'
  const [background, setBackground] = React.useState('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg');
  const [matches, setMatches] = React.useState([]);
  const [renderedMatches, setRenderedMatches] = React.useState();

  useEffect(() => {
    async function getMatches() {
      let response = await fetch('http://localhost:3000/matches');
      response = await response.json();
      // console.log('matches list', response);
      const rendered = response.map((el, ind) => <MatchesInfo key={ind} match={el} />);
      setRenderedMatches(rendered);
      setMatches(response);
    }
    getMatches();
  }, []);

  return (
    <div style={{ minHeight: '1000px', background: `url(${background})` }}>
      {renderedMatches}
    </div>
  );
}

export default MatchContainer;
