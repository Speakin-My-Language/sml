import React from 'react';
const fetch = require('node-fetch');

const users = [
  {
    name: 'Matt',
    languages: {
      'Javascript': 10000,
      'Python': 50000,
      'C': 20000,
    },
  },
  {
    name: 'Yale',
    languages: {
      'Javascript': 49040,
      'Python': 34800,
      'C': 9000,
    },
  },
]

function ProgramContainer() {
  const [choice, setChoice] = React.useState({});
  // const [userList, setUserList] = React.useState(fetch('http://localhost:3000?get user list'));
  const [userList, setUserList] = React.useState(users);
  const [currentUser, setCurrentUser] = React.useState();
  const userProfile = () => (
    <div>
      <div>{`Current User: ${currentUser.name}`}</div>
      <div>{`Language: ${currentUser.languages.Javascript}`}</div>
    </div>
  );

  React.useEffect(() => {
    async function displayNewUser() {
      if (currentUser !== undefined) {
        setMessage(userProfile());
      } else {
        setMessage('No more users.');
      }
    }
    displayNewUser();
  }, [currentUser]);

  React.useEffect(() => {
    async function getNextUser() {
      const nextUser = userList.pop();
      setUserList(userList);
      setCurrentUser(nextUser);
      // console.log(userList)
    }
    getNextUser();
  }, [choice]);

  React.useEffect(() => {
    if (choice) {
      fetch('http://localhost:3000?');
    } else fetch('http://localhost:3000?');
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
