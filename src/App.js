// Correzioni aggiunte al componente App

import React, { useEffect, useState } from 'react';
import { Tabs, Alert, Tab } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const API_ENDPOINT = 'https://api.tvmaze.com/search/shows?q=';

  const [result, setResult] = useState([]);
  const [message, setMessage] = useState("");
  const [currentTab, setCurrentTab] = useState("search");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const localFavourites = localStorage.getItem("favourites");
    if (localFavourites) {
      setFavourites(JSON.parse(localFavourites));
    }
  }, []);

  function addToFavourites(item) {
    setFavourites((prev) => [...prev, item]);
    setMessage("Elemento aggiunto ai preferiti");
    localStorage.setItem("favourites", JSON.stringify([...favourites, item]));
  }

  function removeFromFavourites(item) {
    setFavourites((prev) => prev.filter(el => el.show.id !== item.show.id));
    setMessage("Elemento rimosso dai preferiti");
    localStorage.setItem("favourites", JSON.stringify(favourites.filter(el => el.show.id !== item.show.id)));
  }

  async function handleSearch(event, value) {
    event.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINT}${value}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data);
        if (data.length === 0) {
          setMessage('Nessun risultato trovato');
        } else {
          setMessage('');
        }
      } else {
        throw new Error(`Errore HTTP! Stato: ${response.status}`);
      }
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
      setMessage('Errore durante la ricerca');
    }
  }

  return (
    <div className="App">
      <Nav />
      {message && <Alert className='alert' dismissible variant='primary'>{message}</Alert>}
      <Tabs defaultActiveKey="search" id='app-tab' className='mb-3 mt-4' activeKey={currentTab} onSelect={(el) => setCurrentTab(el)}>
        <Tab eventKey="search" title="Search">
          <SearchBar onSearch={handleSearch} />
          <MovieList data={result} onFavourite={addToFavourites} isFavouritePage={false} />
        </Tab>
        <Tab eventKey="favourite" title="Favourites">
          <MovieList data={favourites} onRemove={removeFromFavourites} isFavouritePage={true} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
