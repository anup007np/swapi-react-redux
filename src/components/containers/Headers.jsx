import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortBy from '../SortBy';
import Search from '../Search';

import { handleSorting, handleSearching } from '../../actions/';

class Headers extends Component {
    constructor(props) {
        super(props);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSortByChange(event) {
        const value = event.target.value;
        const { onSortByChange } = this.props;
        onSortByChange(value);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const { onInputChange } = this.props;
        onInputChange(value);
    }

  render() {
    return (
        <div className="headerBox highlight">
            <div className="row">
                <SortBy onSortByChange={this.handleSortByChange}/>
                <Search onInputChange={this.handleInputChange}/>
            </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        movieList : state.movies.movieList,
        loading: state.movies.loading,
        error: state.movies.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSortByChange: (value) => {
            dispatch(handleSorting(value));
        },
        onInputChange: (name,value) => {
            dispatch(handleSearching(name,value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers);