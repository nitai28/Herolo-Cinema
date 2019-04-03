import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Modal} from 'react-bootstrap';
import {setSelectedMovieToEdit, saveMovie, loadMovieById, toggleModal} from "../../store/MovieAction";
import Swal from 'sweetalert2'
import './MovieEdit.css'
import MovieForm from '../../components/MovieForm/MovieForm'


class MovieEdit extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: true,
            movieToEdit: (props.selectedMovie) ? props.selectedMovie : {}
        };
    }

    componentDidMount() {
        if (this.props.selectedMovie)
            this.setState({...this.state, movieToEdit: this.props.selectedMovie})
    }

    handleClose() {
        this.setState({show: false});
        if (this.props.selectedMovie) {
            this.props.getMovieById(this.props.selectedMovie.id, this.props.movies);

        }
        this.props.setSelectedMovieToEdit(null);
        this.props.toggleModal();
    }

    handleShow() {
        this.setState({show: true});
    }

    handleSubmit = (movieData) => {
        let movieNameAvilable = this.props.movies.findIndex(movie => movie.title === movieData.title);
        if (movieNameAvilable !== -1) {
            Swal.fire({
                title: 'Movie name already exist',
                text: 'please change the name',
                type: 'warning',
                confirmButtonText: 'ok',
            })
        }
        else {
            (this.state.movieToEdit) ?
                this.props.saveMovie({...this.state.movieToEdit, ...movieData}, this.props.movies)
                : this.props.saveMovie(movieData, this.props.movies)
            this.handleClose();
        }


    }

    render() {
        const selectedMovie = this.state.movieToEdit;
        const initialValues = {
            title: selectedMovie.title || '',
            year: selectedMovie.year || '',
            runtime: selectedMovie.runtime || '',
            genre: selectedMovie.genre || '',
            director: selectedMovie.director || ''
        }
        return (
            <div className="move-edit">
                <Modal className="edit-modal" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="edit-modal-header" closeButton>
                        <Modal.Title>Movie Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="edit-modal-body">
                        <MovieForm initialValues={initialValues} onSubmit={this.handleSubmit}/>
                    </Modal.Body>
                </Modal>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies,
        selectedMovie: state.movieReducer.selectedMovieToEdit

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedMovieToEdit: (id) => dispatch(setSelectedMovieToEdit(id)),
        saveMovie: (movie, movies) => dispatch(saveMovie(movie, movies)),
        getMovieById: (id, movies) => dispatch(loadMovieById(id, movies)),
        toggleModal:()=>dispatch(toggleModal())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);