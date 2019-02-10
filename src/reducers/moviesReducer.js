import { REQUEST_MOVIES, RECEIVE_MOVIES, ERROR, HANDLE_SORTING, SEARCH_MOVIES } from '../actions/types';
import initialState from './initialState';

export default function movieReducer(state = initialState.movies, action) {
    switch(action.type) {
        case REQUEST_MOVIES:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_MOVIES:
            return {
                ...state,
                loading: false,
                movieList: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case HANDLE_SORTING:
            return {
                ...state,
                sortBy: action.payload
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                searchText: action.payload
            }
        default:
            return state;
    }
}