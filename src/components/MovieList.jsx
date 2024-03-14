import React from 'react'
import './movielist.css'
import MovieCard from './MovieCard'

function MovieList(props) {

    const data = props;
  return (
    <div className='movies-container mt-5'>
        {data.length > 0 && data.map(el => (
            <MovieCard
                key = {el.show.id}
                id = {el.show.id}
                title = {el.show.title}
                image = {el.show?.original ?? ""}
                summary = {el.show.summary ?? ""}
                rating = {el.show.average}
            />
        ))}
    </div>
  )
}

export default MovieList;
