import { Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Loginspotify from './login_spotify';

function FeelMid() {
    const { user, isAuthenticated } = useAuth0();
    
  return (
    <div>
        <br/>
        <Typography  className='letes' variant='h5'>No todos los dias son buenos {user.given_name} alguien quiere decirte algo...</Typography>
        <br/>

        <Loginspotify/>            
    </div>
  )
}

export default FeelMid