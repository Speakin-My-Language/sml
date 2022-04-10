import Landing from './components/LandingContainer';

const React = require('react');
const fetch = require('node-fetch');

function App() {
  return (
    <div id="landingContainer">
      App Container
      <Landing />
    </div>
  );
}

export default App;
