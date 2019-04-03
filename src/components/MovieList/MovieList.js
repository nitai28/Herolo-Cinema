import React from 'react';
import {Link} from 'react-router-dom';

import MoviePreview from '../MoviePreview/MoviePreview'
import './MovieList.css'

const MovieList = (props) => {
    const moviePreview = props.movies.map((movie, i) => {
        return (
            <li className="box movie-box" key={movie.id}>
                <Link to={`/${movie.id}`}>
                    <MoviePreview movie={movie}/>
                </Link>
            </li>
        )
    });

    return (
        <div >
            <ul className="movie-container">
                {moviePreview}
            </ul>
        </div>
    );
}


export default MovieList;
