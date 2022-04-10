import React from 'react';

const fetch = require('node-fetch');

function SignupContainer() {
  const oAuthGo = () => {
    window.location = 'http://localhost:3000/signup/github/auth';
  };

  return (
    <div id="signupContainer">
      <p>signupContainer</p>
      <button onClick={oAuthGo} type="button">Sign Up</button>
    </div>
  );
}

export default SignupContainer;
