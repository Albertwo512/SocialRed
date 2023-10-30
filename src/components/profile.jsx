import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loginspotify from './login_spotify';
import Typography from '@mui/material/Typography';
import Questions from './questions';
import FeelSad from './feelSad';


function Profile() {
    const { user, isAuthenticated } = useAuth0();
  
    if (!isAuthenticated) {
      return <div></div>;
    }
  
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <Questions/>
        {/* <FeelSad/> */}
        {/* <Loginspotify/> */}
      </div>
    );
  }
  

export default Profile