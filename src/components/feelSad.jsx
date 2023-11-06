import { Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Loginspotify from './login_spotify';



function FeelSad() {
    const [open, setOpen] = React.useState(false);
    const { user, isAuthenticated } = useAuth0();

  return (
    <div>
        <br/>
        <Typography  className='letes' variant='h5'>Relax, {user.given_name} here's a video for us to unwind a bit</Typography>
        <br/>
        <iframe className='object-fit-xxl-contain border rounded' src="https://www.youtube.com/embed/biblOyJB9EM"/>
        <br/>

        <Loginspotify/>
    </div>
  )
}

export default FeelSad