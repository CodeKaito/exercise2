import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './moviecard.css'

function MovieCard(props) {

    const {id, title, image,  }
  return (
    <Card bg='dark' text="light" border='primary' style={{ width: "18rem"}}>
        <Card.Header>#26475 The Office</Card.Header>
        <Card.Img 
            variant='top'
            src='https://media.gettyimages.com/id/141187399/it/foto/the-office-pilot-pictured-john-krasinski-as-jim-halpert-rainn-wilson-as-dwight-schrute-jenna.jpg?s=612x612&w=gi&k=20&c=xGiDQ2jbHLg2246wSpQBVaoHynD_dQWiu6X1J1nPDbA='
            style={{ height: "250px", objectFit: "cover" }}

        />
        <Card.Body>
            <Card.Title>Trama</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small>Punteggio 7.89</small>
        </Card.Footer>
        <Button>Add to Fav</Button>
    </Card>
  )
}

export default MovieCard
