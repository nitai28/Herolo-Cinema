import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {loadMovies,toggleModal} from "../store/MovieAction";


import MovieList from '../components/MovieList/MovieList';
import MovieEdit from '../pages/MovieEdit/MovieEdit';



class Movies extends Component {
    state = {
        movies: ''
    }

    componentDidMount() {
        if (!this.props.movies.length)
            this.props.loadMovies()
        
    }

    render() {
        return (
            <div>
                <Button
                    variant="primary"
                    onClick={() => this.props.toggleModal()}
                >Add Movie</Button>
                {this.props.openModal ? <MovieEdit show={this.props.openModal} /> : null}
                <MovieList movies={(this.state.movies)?this.state.movies:this.props.movies}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies,
        openModal:state.movieReducer.showModal

    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadMovies: () => dispatch(loadMovies()),
        toggleModal:()=>dispatch(toggleModal())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
