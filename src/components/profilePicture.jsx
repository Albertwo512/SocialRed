import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './loginButton';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';

function ProfilePicture() {
  const { user, isAuthenticated } = useAuth0();
  
    if (!isAuthenticated) {
      return <div><LoginButton/></div>;
    }
  
    return (
      <div>
        <Stack direction="row" spacing={2}>
        <Avatar src={user.picture} alt={user.name} />
        </Stack>
      </div>
    );  
}

export default ProfilePicture