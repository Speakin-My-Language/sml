import Landing from './components/LandingContainer';
import Program from './components/ProgramContainer'
const React = require('react');
const fetch = require('node-fetch');

function App() {
  const [uri, setUri] = React.useState(window.location.href);
  const [container, setContainer] = React.useState(<Landing />);

  React.useEffect(() => {
    if (uri.split('?')[1]) {
      setUri('program');
    }
    if (uri === 'program') {
      setContainer(<Program />);
    }
  }, [uri]);

  return (
    <div id="landingContainer">
      App Container
      {uri}
      {container}
    </div>
  );
}

export default App;
