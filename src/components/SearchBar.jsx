import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./searchbar.css";

export default function SearchBar(props) {

    const {onSearch} = props;

    const [inputName, setInputName] = useState("");

    return (
        <Container className='container-form'>
            <Form onSubmit={(e) => onSearch(e, inputName)}>
            <Form.Group className='mb-3' controlId='formSearch'>
                <Form.Label className='search-title'>Search TV Series</Form.Label>
                <Form.Control
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    type='text'
                    placeholder='Insert a tv series name'
                />
                <Form.Text className='search-muted'>
                    Insert a title of a tv series
                </Form.Text>
            </Form.Group>
            <Button variant='primary' type='submit'>
                Search
            </Button>
        </Form>
        </Container>
        
    );
}
