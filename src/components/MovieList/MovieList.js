import React from 'react';
import {Link} from 'react-router-dom';

import MoviePreview from '../MoviePreview/MoviePreview'

const MovieList = (props) => {
    const moviePreview = props.movies.map((movie, i) => {
        return (
            <li key={movie.id}>
                <Link to={`/${movie.id}`}>
                    <MoviePreview movie={movie}/>
                </Link>
            </li>
        )
    });

    return (
        <div>
            <ul>
                {moviePreview}
            </ul>
        </div>
    );
}


export default MovieList;
