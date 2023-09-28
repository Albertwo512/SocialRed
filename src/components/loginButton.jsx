
import { useAuth0 } from '@auth0/auth0-react'
import * as React from 'react';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()
    return (
    <Button onClick={() => loginWithRedirect()}  ><AccountCircleIcon color="action"  fontSize='large'/></Button>
    )
}



export default LoginButton