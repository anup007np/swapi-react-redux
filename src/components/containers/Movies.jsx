import React, { Component } from 'react';
import MovieList from '../MovieList';
import MovieDetail from '../MovieDetail';
import { connect } from 'react-redux';

import { fetchMovies } from "../../actions/";

import { getFilteredMovieList, getMovieDetail } from '../../lib/';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetailList: [],
            isDetail: false
        };
        this.returnMovieList = this.returnMovieList.bind(this);
        this.handleViewDetail = this.handleViewDetail.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    returnMovieList() {
        // Retrieve movielist from the store and sort the result
         const { sortKey, movieList, searchText } = this.props;
         return getFilteredMovieList(sortKey, movieList, searchText);
    }

    handleViewDetail(event) {
        const movieId = event.target.id;

        const { movieList } = this.props;

        let movieDetail = getMovieDetail(movieId, movieList)

        this.setState({
            movieDetailList: movieDetail,
            isDetail: true
        });
    }

    renderMovieDetail() {
        const MovieDetailComponent = () => {
            return (
                <div className="card">
                    <div className="card-header">
                        <span className="bold">Movie description</span>
                    </div>
                    <div className="card-body">
                        <p className="card-text">No movie selected.</p>
                    </div>
                </div>
            )
        };

        return (
            <div className="col-6">
                { this.state.isDetail ? <MovieDetail movieDetailList={this.state.movieDetailList} /> : <MovieDetailComponent /> }
            </div>
        )
    }

    render() {
        const { error, loading } = this.props;

        if (error) {
            return (
                <div class="alert alert-warning" role="alert">
                    Error! {error.message}
                </div>
            )
        }

        if (loading) {
            return (
                <div>
                    <span class="sr-only">Loading...</span>
                </div>
            )
        }

        return (
            <div className="row">
                <div className="col-6">
                    <MovieList movieList={this.returnMovieList()} onClickDetail={this.handleViewDetail} />
                </div>
               { this.renderMovieDetail() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movieList : state.movies.movieList,
        sortKey : state.movies.sortBy,
        loading: state.movies.loading,
        error: state.movies.error,
        searchText : state.movies.searchText,
    }
}


export default connect(mapStateToProps, null) (Movies);