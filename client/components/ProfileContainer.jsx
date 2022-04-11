import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
    <Card id="sml" sx={{ minWidth: 275 }}>
        <CardContent>
        <form action="/user" method="PUT">
          {Object.keys(profile).map((el) => (
            <>
              <label>{el}</label>
              <br />
              <Input className='updateProfileInput' type="text" value={profile[el]} />
              <br />
            </>
          ))}
            <Button
              className='updateProfileBtn'
              data-testid='OAuth-2'
              variant='contained'
              color='secondary'
              size='large'        
              sx={{ borderRadius: 1, fontWeight: 'bold', margin: 5, padding: 1 }}
              onClick={() => setChoice({ name: currentUser.name, choice: 0 })}
            >
              Update
          </Button>
          {/* <Button type="submit" onClick={() => setCounter()}>Update</Button> */}
        </form>
        </CardContent>
    </Card>
  );
}

export default ProfileContainer;
