import React from 'react';

const Search = ({ onInputChange }) => {
    return(
        <div className="col-md-10">
            <input type="text" className="form-control"  onChange={onInputChange} placeholder="Type movie title to filter..."/>
        </div>
    )
}

export default Search;