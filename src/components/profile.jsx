import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loginspotify from './login_spotify';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
  
    if (!isAuthenticated) {
      return <div>No estás autenticado.</div>;
    }
  
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Ready to the music?</h2>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <Loginspotify/>
      </div>
    );
  }
  

export default Profile