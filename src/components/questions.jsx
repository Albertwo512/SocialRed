import React from 'react'
import { Typography, selectClasses } from '@mui/material'
import { useState, useEffect } from 'react';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import FeelSad from './feelSad';
import FeelMid from './feelMid';
import FeelGood from './feelGood';

function Questions() {

  const [mostrarComponente1, setMostrarComponente1] = useState(false);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);
  const [mostrarComponente3, setMostrarComponente3] = useState(false);
  
    // Función para manejar el clic del botón
    const emotion1 = () => {
      setMostrarComponente1(true);
    };
    const emotion2 = () => {
      setMostrarComponente2(true);
    };

    const emotion3 = () => {
      setMostrarComponente3(true);
    };


  return (
    <div>
      <br/>
      <Typography  variant='h5'>
      First of all, tell us how you're feeling today...
      </Typography>
      <br/>
      {mostrarComponente1 ? (
        <FeelSad />
      ) : mostrarComponente2 ? (
        <FeelMid/>
      ) : mostrarComponente3 ? (
        <FeelGood/>
        ): (
        <div>
          <Typography variant='h5'> </Typography>
          <div className="form-check form-check-inline">
            <SentimentVeryDissatisfiedIcon onClick={emotion1} sx={{ fontSize: 50 }} />
          </div>
          <div className="form-check form-check-inline">
            <SentimentNeutralIcon onClick={emotion2} sx={{ fontSize: 50 }} />
          </div>
          <div className="form-check form-check-inline">
            <MoodIcon onClick={emotion3} sx={{ fontSize: 50 }}/>
          </div>
        </div>
      )}
    </div>
  )
}
export default Questions