import { useEffect, useState } from 'react';
import { Tabs, Alert, Tab } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {

  const API_ENDPOINT = 'https://api.tvmaze.com/search/shows?q=';

  // array contenente i dati presi dalla API
  const [result, setResult] = useState([]);

  const [currentTab, setCurrenTab] = useState("search");

  const [favourites, setFavourites] = useState([]);

  // Funzione per aggiungere ai favourites
  function addToFavourites(item) {
    // Aggiungi l'elemento alla lista precedente
    setFavourites((prev) => [...prev, item]);
  }

  // Funzione per chiamata API
  async function handleSearch(event, value) {
    event.preventDefault();
    
    try {
      // Chiamata GET all'url API_ENDPOINT
      const response = await fetch(`${API_ENDPOINT}{value}`);

      if (response.ok) {
        // Prendiamo il risultato della chiamata API
        const result = await response.json();

        // Andiamo a settare la variabile di stato "results" al risultato dell'API
        setResult(result);

        console.log(result);

        // Gestione di imprevisti
        if (result.length <= 0) {
          alert('Nessun risultato trovato');
        }
      } else {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.response = response;
        throw error;
      }

    } catch (error) {
      // Consolelog dell'errore
      console.log(error);
    }

  }

  return (
    <div className="App">
      <Nav />
      <Tabs defaultActiveKey="search" id='app-tab' className='mb-3 mt-4' activeKey={currentTab} onSelect={(el) => setCurrenTab(el)}>
        <Tab eventKey="search" title="Search">
          <SearchBar onSearch={handleSearch} />
          <MovieList data={result} onFavourite={addToFavourites} />
        </Tab>
        <Tab eventKey="favourite" title="Favourites">
          <h1>favourite</h1>
          <MovieList data={favourites} />
        </Tab>
      </Tabs>
      
    </div>
  );
}

export default App;
