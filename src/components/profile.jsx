import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
    const { user, isAuthenticated } = useAuth0();
  
    if (!isAuthenticated) {
      return <div>No estás autenticado.</div>;
    }
  
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  }
  

export default Profile