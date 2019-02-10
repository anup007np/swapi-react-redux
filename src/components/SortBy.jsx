import React from 'react';

const SoryBy = ({ onSortByChange })=> {
    return(
        <div className="col-md-2">
            <select className="form-control" id="ControlSelect" onChange={onSortByChange}>
                <option>Sort by...</option>
                <option value="episode">Episode</option>
                <option value="year">Year</option>
            </select>
        </div>
    )
}

export default SoryBy;