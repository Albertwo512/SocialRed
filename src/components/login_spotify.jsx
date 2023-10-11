import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './buttons.css';
import { useState, useEffect } from 'react';
import { Container, InputGroup, FormControl, Row, Card } from 'react-bootstrap';

const CLIENT_ID = "73b88742b1e541b586a08321dca68f5f";
const CLIENT_SECRET = "cb2011b976f447abb96bf847febef01d";


function Loginspotify() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
  
    var authParameters = {
      method: "POST",
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters )
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token,))
  },[])

  async function search() {
    console.log('Searching ' + searchInput);

    var artistParameters = {
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + accessToken
      }
    }

    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
    .then(response => response.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      <Container>
        <InputGroup  className='mb-3' size='lg'>
         <FormControl
         placeholder='Search Artists...'
         onKeyDown={ event => {
        if (event.key === "Enter") {
          search();
        }
       }}
       onChange={event => setSearchInput(event.target.value)}
    >
        </FormControl>
        <button onClick={search} className="button-85" role="button">Search</button>
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