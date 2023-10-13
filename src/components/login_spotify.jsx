import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './buttons.css';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function Loginspotify() {

  const [data, setData] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null)
  const { user, isAuthenticated } = useAuth0();

  const theme = useTheme();
  

  async function azar() {
    const min = 1;
    const max = 21;
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return setRandomNumber(randomNumber); 
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const phrases = [
    "Code is the language of the future; make your voice heard!",
    "Every error is a learning opportunity in the world of programming.",
    "Your code is like a digital work of art; let yourself be inspired!",
    "Programming is the bridge to a world of endless possibilities.",
    "Patience and persistence are key to success in programming.",
    "Write code today to create a better digital future tomorrow.",
    "Every line of code you write is a step towards your digital dream.",
    "Challenges are opportunities in disguise in the world of programming.",
    "Creativity is your best tool for problem-solving on the web.",
    "Code never lies; it is pure truth in the digital world.",
    "Web development is like a puzzle; find the missing piece.",
    "Don't be discouraged by errors; they are the path to perfection.",
    "The web is your canvas, and code is your brush. Paint your vision!",
    "Technology changes, but your passion for programming remains constant.",
    "Every web project is an opportunity to change the world.",
    "Be the architect of your own digital world through code.",
    "Programming is like music; find your rhythm and keep going.",
    "No matter how much you know, there is always something new to learn on the web.",
    "Problem-solving is at the heart of web development.",
    "Never underestimate the impact of your code on people's lives."
  ];
  
  

  return (
    <div>
      <Container>
        <button onClick={azar} className="button-85" role="button">Search</button>
      </Container>
      <Container>
      <Card sx={{ maxWidth: 345 }}>

      <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {data[randomNumber]?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Hello {user.given_name} {phrases[randomNumber]}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data[randomNumber]?.image}
        alt="Live from space album cover"
      />
    </Card>
      </Card>
      </Container>
    </div>
  )
}

export default Loginspotify