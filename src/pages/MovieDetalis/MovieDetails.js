import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {Button} from 'react-bootstrap';

import {deleteMovie, loadMovieById, setSelectedMovieToEdit} from "../../store/MovieAction";
import MovieEdit from '../MovieEdit/MovieEdit';


class MovieDetails extends Component {
    state = {
        showModal: false,
        showEditModal: false,
    }

    componentDidMount() {
        this.props.getMovieById(this.props.match.params.id, this.props.movies)
    }

    filterMovieTitle = (title) => {
        return title.split(' ').map(function (element) {
            element = element.replace(/[^\w\s]/gi, '');
            element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            return element;
        }).join(' ');
    }

    deleteMovie = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            this.props.deleteMovie(this.props.match.params.id, this.props.movies);
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your imaginary file has been deleted.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    handleClick = () => {
        this.props.setSelectedMovieToEdit(this.props.match.params.id);
        this.setState({...this.state, showEditModal: true})
    }


    render() {
        const {movie} = this.props;
        if (movie) {
            return (
                <div>
                    <header>
                        <Link to={'/'}>Back</Link>
                            <button onClick={this.handleClick}>
                                Edit
                            </button>
                    </header>
                    <img src={movie.img} alt=""/>
                    <div>
                        <h1>{this.filterMovieTitle(movie.title)}</h1>
                        <span>Director:{movie.director}</span>
                        <span>Time:{movie.runtime}</span>
                        <span>Genre:{movie.genre}</span>
                        <span>Year:{movie.year}</span>
                    </div>
                    <Button variant="danger" onClick={this.deleteMovie}>delete</Button>
                    {this.props.movieToEdit && <MovieEdit show={this.state.showEditModal}/>}
                </div>
            );
        }
        return (
            <div>

                <Link to={'/'}> Back </Link>
                <h1>Movie not found...</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieReducer.selectedMovie,
        movies: state.movieReducer.movies,
        movieToEdit: state.movieReducer.selectedMovieToEdit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieById: (id, movies) => dispatch(loadMovieById(id, movies)),
        deleteMovie: (id, movies) => dispatch(deleteMovie(id, movies)),
        setSelectedMovieToEdit: (id) => dispatch(setSelectedMovieToEdit(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);