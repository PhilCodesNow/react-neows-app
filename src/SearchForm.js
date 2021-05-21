import React from 'react';

import './SearchForm.css';

function SearchForm(props) {

const {
    startDate,
    endDate,
    handleSetStartDate,
    handleSetEndDate,
    handleSearchApi
} = props
    return (
        <div className="searchForm">
            Search Dates
            <form onSubmit={handleSearchApi}>
                <label>Start Date: </label>
                <input type="date" onInput={handleSetStartDate}></input>
                <label>End Date: </label>
                <input type="date" onInput={handleSetEndDate}></input>
                <input type="submit" value="Search!"></input>
            </form>
        </div>
    )
}

export default SearchForm
