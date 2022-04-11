import React from 'react';
import SignupContainer from './SignupContainer';

function LandingContainer() {
  const [ background, setBackground ] = React.useState('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg')

  // React.useEffect(() => {
  //   document.body.style.backgroundimage
  // })
  return (
    <div style={{ minHeight: '1000px', background: `url(${background})` }}>
      LandingContainer
      <SignupContainer />
    </div>
  )

}

export default LandingContainer;