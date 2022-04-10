import Landing from './components/LandingContainer';
import Program from './components/ProgramContainer';
import Matches from './components/MatchContainer';
import Profile from './components/ProfileContainer';
import Nav from './components/NavContainer';
const React = require('react');
const fetch = require('node-fetch');

function App() {
  const [uri, setUri] = React.useState(window.location.href);
  const [container, setContainer] = React.useState(<Landing />);
  const [nav, setNav] = React.useState('');

  React.useEffect(() => {
    setUri(window.location.href);
    const endPoint = uri.split('?')[1];
    if (endPoint === 'program') {
      setContainer(<Program />);
      setNav(<Nav />);
    }
    if (endPoint === 'matches') {
      setContainer(<Matches />);
      setNav(<Nav />);
    }
    if (endPoint === 'profile') {
      setContainer(<Profile />);
      setNav(<Nav />);
    }
  }, [uri]);

  return (
    <div id="landingContainer">
      {nav}
      App Container
      <p>{uri}</p>
      {container}
    </div>
  );
}

export default App;
