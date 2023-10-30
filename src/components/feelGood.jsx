import { Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Loginspotify from './login_spotify';

function FeelGood() {

    const { user, isAuthenticated } = useAuth0();

  return (
    <div>
        <br/>
        <Typography  className='letes' variant='h5'>Esa es la actitud {user.given_name} aqui hay algo que quieren decirte para que tu dia sea mucho mejor</Typography>
        <br/>

        <Loginspotify/>            
    </div>
  )
}

export default FeelGood