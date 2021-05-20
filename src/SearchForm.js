import React from 'react'

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
            Search Form
            <form onSubmit={handleSearchApi}>
                <label>Start Date</label>
                <input type="date" onInput={handleSetStartDate}></input>
                <label>End Date</label>
                <input type="date" onInput={handleSetEndDate}></input>
                <input type="submit" value="Search!"></input>
            </form>
        </div>
    )
}

export default SearchForm
