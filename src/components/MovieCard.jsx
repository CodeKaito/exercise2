import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './moviecard.css'

function MovieCard(props) {

    const {id, title, image, summary, rating } = props;
  return (
    <Card bg='dark' text="light" border='primary' style={{ width: "18rem"}}>
        <Card.Header>{`${id}${title}`}</Card.Header>
        <Card.Img 
            variant='top'
            src={image}
            style={{ height: "250px", objectFit: "cover" }}

        />
        <Card.Body>
            <Card.Title>Trama</Card.Title>
            <Card.Text>
            {summary}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small>Punteggio: {rating ?? "0"}</small>
        </Card.Footer>
        <Button>Add to Fav</Button>
    </Card>
  )
}

export default MovieCard
