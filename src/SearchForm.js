import React from 'react';

import './SearchForm.css';

function SearchForm(props) {

const {
    startDate,
    endDate,
    handleSetStartDate,
    handleSearchApi
} = props
    return (
        <div className="searchForm">
            <h3>
            Search Date
            </h3>
            
            <form onSubmit={handleSearchApi}>
                <label>Date: </label>
                <input type="date" onInput={handleSetStartDate}></input>

                <input type="submit" value="Search!"></input>
            </form>
        </div>
    )
}

export default SearchForm
