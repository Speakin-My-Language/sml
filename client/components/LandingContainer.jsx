import React from 'react';
import SignupContainer from './SignupContainer';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function LandingContainer() {
  const [ background, setBackground ] = React.useState('https://eyeondesign.aiga.org/wp-content/uploads/2020/09/2.jpg')

  // React.useEffect(() => {
  //   document.body.style.backgroundimage
  // })
  return (
    <div className="backgroundImageContainer"style={{ background: `url(${background})` }}>

      <Card id="sml" sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography>  */}
            <div id="toptext"> 
            Speaking My Language
            </div>
            <div id="bottomtext"> 
            Find your next pair partner
            </div>
          <SignupContainer />
        </CardContent>

      </Card>
    </div>
  )
}

export default LandingContainer;