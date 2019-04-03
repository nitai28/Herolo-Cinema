import React from 'react';

import imgNotA from '../../assets/imageNotFound.jpg'
import './MoviePreview.css'

const MoviePreview = ({movie}) => {
    const movieImage = movie.img || imgNotA

    const filterMovieTitle = (title) => {
        return title.split(' ').map(function (element) {
            element = element.replace(/[^\w\s]/gi, '')
            element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
            return element;
        }).join(' ');
    }

    return (
        <div className="movie-preview">
            <img className="movie-img" src={movieImage} alt="Movie"/>
            <div>
                <h1 className='movie-title'>{filterMovieTitle(movie.title)}</h1>
                <div className="second-title">Director by: {movie.director}</div>
            </div>
        </div>
    )
}


export default MoviePreview;