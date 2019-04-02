import React from 'react';

import imgNotA from '../../assets/imageNotFound.jpg'

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
        <div>
            <img src={movieImage} alt="Movie" width="300" height="300"/>
            <h1>{filterMovieTitle(movie.title)}</h1>
            <span>Director: {movie.director}</span>
        </div>
    )
}



export default MoviePreview;