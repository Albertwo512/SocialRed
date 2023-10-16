import './App.css';
import Profile from './components/profile';
import { useAuth0 } from '@auth0/auth0-react'
import NavBar from './components/navBar';
import PreIndex from './components/preIndex';
import '/Users/albertoalv/Documents/Task Home/Login/parte1/src/components/buttons.css';


function App() {

  const {user,isAuthenticated, isLoading} = useAuth0()

  if (isLoading) return <h1>Cargando...</h1>

  return (
    <div className="App section">
      <NavBar/>
      
      {
        isAuthenticated ?
        <h1>Bienvenido {user.given_name}</h1>  
        :
        <PreIndex/>
        
      }
      
      <Profile/>
      


    </div>
  );
}

export default App;
