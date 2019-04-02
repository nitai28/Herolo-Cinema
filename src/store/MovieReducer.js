const initialState = {
    movies: [],
    selectedMovie: null,
    selectedMovieToEdit: null,
    showModal: false
}

export function movieReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOAD_MOVIES':
            return {
                ...state,
                movies: action.payload
            }

        case  'LOAD_MOVIE':
            return {
                ...state,
                selectedMovie: action.payload
            }
        case 'DELETE_MOVIE':
            return {
                ...state,
                movies: action.payload
            }

        case 'SAVE_MOVIE':
            return {
                ...state,
                movies: action.payload
            }
        case 'SET_SELECTED_MOVIE_EDIT':
            let movieToEdit = state.movies.find(movie => movie.id === action.payload);
            return {
                ...state,
                selectedMovieToEdit: movieToEdit
            }
        case 'TOGGLE_MODAL':
            return {
                ...state,
                showModal: !state.showModal
            }

        default:
            return state;
    }
}