import React from 'react';
import './movielist.css';
import MovieCard from './MovieCard';

function MovieList(props) {
    const { data, onFavourite } = props; // Estrai data dalle props

    return (
        <div className='movies-container mt-5'>
            {data && data.length > 0 && data.map((el) => (
                <MovieCard
                    key={el.show.id}
                    id={el.show.id}
                    title={el.show.name}
                    image={el.show?.image.original ?? ""}
                    summary={el.show.summary ?? ""}
                    rating={el.show.average}
                    onFavourite={() => onFavourite(el)}
                />
            ))}
        </div>
    );
}

export default MovieList;
