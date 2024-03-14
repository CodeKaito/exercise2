import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './moviecard.css';
import ReactHtmlParser from 'html-react-parser';

function MovieCard(props) {
    const { title, image, summary, rating, onFavourite, onRemove, isFavouritePage } = props;

    return (
        <Card bg='dark' text="light" border='primary' style={{ width: "18rem"}}>
            <Card.Header>{title}</Card.Header>
            <Card.Img 
                variant='top'
                src={image}
                style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>Trama</Card.Title>
                <Card.Text>
                    {summary ? ReactHtmlParser(summary) : "Trama non disponibile"}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small>Punteggio: {rating ?? "Punteggio non disponibile"}</small>
            </Card.Footer>
            {isFavouritePage 
            ? <Button variant='danger' onClick={onRemove}>Remove from Fav</Button> 
            : <Button variant='primary' onClick={onFavourite}>Add to Fav</Button>}
        </Card>
    );
}

export default MovieCard;
