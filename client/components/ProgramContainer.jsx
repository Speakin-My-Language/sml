import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChartContainer from './ChartContainer';

const fetch = require('node-fetch');

function ProgramContainer() {
  const [choice, setChoice] = React.useState({});
  const [userList, setUserList] = React.useState();
  const [currentUser, setCurrentUser] = React.useState();
  const [message, setMessage] = React.useState('Loading');
  const [userId, setUserId] = React.useState();

  // Create child component
  const userProfile = () => (
    <div>
      <div className="languageChartDiv"><ChartContainer languages={currentUser.languages} /></div>
      <div>{`${currentUser.name}`}</div>
      <div style={{ fontSize: '1rem' }}>{`${currentUser.languages}`}</div>
    </div>
  );

  React.useEffect(() => {
    async function asyncSetUser() {
      let response = await fetch('http://localhost:3000/newProgrammer');
      response = await response.json();
      console.log('cookies', document.cookie);
      setUserId(response[1]);
      const nextUser = response[0].pop();
      setUserList(response[0]);
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

  // {
  //   node_id // -> SELECT uuid from users where node_id=node_id
  //   match_uuid => currentUser.id
  //   is_matched => choice.choice
  // }

  React.useEffect(() => {
    console.log('choice', choice)
    async function getNextUser() {
      if (userList) {
        let response = await fetch(`http://localhost:3000/matches?node_id=${userId}&match_uuid=${currentUser.id}&is_matched=${choice.choice}`, {
          method: 'POST',
          body: JSON.stringify({ hello: 'hello' }),
        });
        const nextUser = userList.pop();
        setUserList(userList);
        setCurrentUser(nextUser);
      }
    }
    getNextUser();
  }, [choice]);

  /*
  charts.js
  */

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Doughnut Chart'
  //       }
  //     }
  //   },
  // };
  // const DATA_COUNT = 5;
  // const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

  return (
    <div id="programContainer">

      <Card id="sml" sx={{ minWidth: 275 }}>
        <CardContent>
          <div>{message}</div>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            sx={{ borderRadius: 2, fontWeight: 'bold', margin: 5, padding: 3 }}
            className="matchButtons" 
            onClick={() => setChoice({ name: currentUser.name, choice: 0 })}
          >
            0
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            sx={{ borderRadius: 2, fontWeight: 'bold', margin: 5, padding: 3 }}
            className="matchButtons" 
            onClick={() => setChoice({ name: currentUser.name, choice: 0 })}
            >
              1
          </Button>
          {/* <Button type="button" className="matchButtons" onClick={() => setChoice({ name: currentUser.name, choice: 0 })}>0</Button>  */}
          {/* <Button type="button" className="matchButtons" onClick={() => setChoice({ name: currentUser.name, choice: 1 })}>1</Button>  */}
            
        </CardContent>

      </Card>
    </div>
  );
}

export default ProgramContainer;
