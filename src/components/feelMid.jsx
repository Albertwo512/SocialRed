import { Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Loginspotify from './login_spotify';

function FeelMid() {
    const { user, isAuthenticated } = useAuth0();
    
  return (
    <div>
        <br/>
        <Typography  className='letes' variant='h5'>Not every day is a good one {user.given_name} Someone wants to tell you something...</Typography>
        <br/>

        <Loginspotify/>            
    </div>
  )
}

export default FeelMid