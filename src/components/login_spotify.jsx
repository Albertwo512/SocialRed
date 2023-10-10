import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './buttons.css';
import { useState, useEffect } from 'react';
import { Container, InputGroup, FormControl, Row, Card } from 'react-bootstrap';

const CLIENT_ID = "73b88742b1e541b586a08321dca68f5f";
const CLIENT_SECRET = "cb2011b976f447abb96bf847febef01d";


function Loginspotify() {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
  
    var authParameters = {
      methods: "POST",
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
    fetch('https://accounts.spotify.com/api/token', )
  },[])
  
  return (
    <div>
      <Container>
        <InputGroup  className='mb-3' size='lg'>
         <FormControl
         placeholder='Search Artists...'
         onKeyDown={ event => {
        if (event.key === "Enter") {
          console.log("Pressed button");
        }
       }}
       onChange={event => searchInput(event.target.value)}
    >
        </FormControl>
        <button onClick={()=> console.log("Hello")} class="button-85" role="button">Search</button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-2'>
        <Card>
          <Card.Img src='#'/>
            <Card.Body>
            <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
        </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Loginspotify