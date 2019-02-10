import { REQUEST_MOVIES, RECEIVE_MOVIES, SEARCH_MOVIES, HANDLE_SORTING, ERROR } from './types';
import axios from 'axios';

export const requestMovies = () => {
    return {
        type: REQUEST_MOVIES,
        payload: true
    }
}

export const receiveMovies = (json) => {
    return {
        type: RECEIVE_MOVIES,
        payload: json
    }
}

export const receiveMoviesError = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}


export const handleSearching = (searchText) => {
    return {
        type: SEARCH_MOVIES,
        payload: searchText
    }
}


export const handleSorting = (sortKey) => {
    return { 
        type: HANDLE_SORTING,
        payload: sortKey
    };
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(requestMovies());
        return axios
            .get('https://star-wars-api.herokuapp.com/films')
            .then(response => {
                dispatch(receiveMovies(response.data));
            })
            .catch ( err => {
                dispatch(receiveMoviesError(err))
            })
    }
}