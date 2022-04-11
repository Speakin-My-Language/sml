import React from 'react';

// const fetch = require('node-fetch');

const profile = {
  name: 'Yale',
  email: 'yale@email.com',
  location: 'Yale York',
  company: 'Yale inc',
  website: 'www.yale.com',
  handle: '@yale',
};

function ProfileContainer() {
  // const [profile, setProfile] = React.useState('');
  const [counter, setCounter] = React.useState();

  React.useEffect(() => {
    fetch('http://localhost:3000/user/');
  }, []);

  React.useEffect(() => {
    fetch('http://localhost:3000/user', { type: 'patch' });
  }, [counter]);

  function clickHandler() {

  }

  return (
    <form action="/user" method="PUT">
      {Object.keys(profile).map((el) => (
        <>
          <label>{el}</label>
          <br />
          <input type="text" value={profile[el]} />
          <br />
        </>
      ))}
      <button type="submit" onClick={() => setCounter()}>Update</button>
    </form>
  );
}

export default ProfileContainer;
