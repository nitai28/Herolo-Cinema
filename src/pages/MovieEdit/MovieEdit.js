import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom'
// import {Button, ButtonToolbar} from 'react-bootstrap';

// import {loadMovieById, deleteMovie} from "../../store/MovieAction";


// import PropTypes from 'prop-types';

class MovieEdit extends Component {
    state = {
        movieForm:{}
    }





    render() {
            return (
                <div>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>;

                </div>
            );


    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.selectedMovie,
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // getMovieById: (id, movies) => dispatch(loadMovieById(id, movies)),
        // deleteMovie: (id, movies) => dispatch(deleteMovie(id, movies))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);