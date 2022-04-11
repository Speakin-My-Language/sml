import React from 'react';

const fetch = require('node-fetch');

function ProgramContainer() {
  const [choice, setChoice] = React.useState({});
  const [userList, setUserList] = React.useState();
  const [currentUser, setCurrentUser] = React.useState();
  const [message, setMessage] = React.useState('Loading');

  // Create child component
  const userProfile = () => (
    <div>
      <div>{`Current User: ${currentUser.name}`}</div>
      <div>{`Language: ${currentUser.languages}`}</div>
    </div>
  );

  React.useEffect(() => {
    async function asyncSetUser() {
      let response = await fetch('http://localhost:3000/newProgrammer');
      response = await response.json();
      const nextUser = response.pop();
      setUserList(response);
      setCurrentUser(nextUser);
    }
    asyncSetUser();
  }, []);

  React.useEffect(() => {
    async function displayNewUser() {
      if (currentUser !== undefined) {
        setMessage(userProfile());
      } else {
        setMessage('No more users.');
      }
    }
    displayNewUser();
  }, [currentUser, userList]);

  React.useEffect(() => {
    async function getNextUser() {
      if (userList) {
        let response = await fetch('http://localhost:3000/matches', {
          type: 'POST',
          headers: {},
          body: JSON.stringify('?'),
        });
        const nextUser = userList.pop();
        setUserList(userList);
        setCurrentUser(nextUser);
      }
    }
    getNextUser();
  }, [choice]);

  return (
    <div id="programContainer">
      <div>ProgramContainer</div>
      <div>{message}</div>
      <button type="button" className="matchButtons" onClick={() => setChoice({ name: currentUser.name, choice: 0 })}>0</button>
      <button type="button" className="matchButtons" onClick={() => setChoice({ name: currentUser.name, choice: 1 })}>1</button>
    </div>
  );
}

export default ProgramContainer;
