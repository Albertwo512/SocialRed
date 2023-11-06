import { Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Loginspotify from './login_spotify';

function FeelGood() {

    const { user, isAuthenticated } = useAuth0();

  return (
    <div>
        <br/>
        <Typography  className='letes' variant='h5'>That's the spirit! {user.given_name} Here's something they want to tell you to make your day much better</Typography>
        <br/>

        <Loginspotify/>            
    </div>
  )
}

export default FeelGood