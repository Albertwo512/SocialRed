import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loginspotify from './login_spotify';
import Typography from '@mui/material/Typography';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
  
    if (!isAuthenticated) {
      return <div>No estás autenticado.</div>;
    }
  
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <Typography variant="h5">Ready to hear what a character has to tell you to start your day off right.</Typography>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <Loginspotify/>
      </div>
    );
  }
  

export default Profile