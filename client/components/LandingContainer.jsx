import React from 'react';
import SignupContainer from './SignupContainer';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function LandingContainer() {
  const [ background, setBackground ] = React.useState('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg')

  // React.useEffect(() => {
  //   document.body.style.backgroundimage
  // })
  return (
    <div className="backgroundImageContainer"style={{ background: `url(${background})` }}>

      <Card id="sml" sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography variant="h3" component="div"> */}
            Speaking My Language
          {/* </Typography> */}
          <SignupContainer />
        </CardContent>

      </Card>
    </div>
  )
}

export default LandingContainer;