import { useState } from 'react';
import Results from './Results';
import SearchForm from './SearchForm';
import Description from './Description';
import './App.css';




function App() {

const [apiData, setApiData] = useState()
const [startDate, setStartDate] = useState()
const [endDate, setEndDate] = useState()
const [descriptionClose, setDescriptionClose] = useState(false)
const [noSearch, setNoSearch] = useState(true)

const handleCloseDescription = (e) =>{
  setDescriptionClose(true)
}


const handleSetStartDate = (e) =>{
  setStartDate(e.target.value)
}

const handleSetEndDate = (e) =>{
  setEndDate(e.target.value)
}

let noSearchClass

if(noSearch === true){
  noSearchClass = 'Date'
} else{
  noSearchClass = 'noDate'
}

const handleSearchApi = (e) =>{
  e.preventDefault()
  if(startDate !== undefined && endDate !== undefined){
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`)
    .then(response => response.json())
    .then(data => setApiData(data))
    console.log(apiData)
    setNoSearch(true)
  } else{
    console.log('no api pull')
    setNoSearch(false)
  }


}








  return (
    <div className="App">
    <div className="app">
      <h1>Near Earth Object Web App</h1>
      <Description
      className="app__description"
      descriptionClose={descriptionClose}
      handleCloseDescription={handleCloseDescription}/>
      <SearchForm
      startDate={startDate}
      endDate={endDate}
      handleSetStartDate={handleSetStartDate}
      handleSetEndDate={handleSetEndDate}
      handleSearchApi={handleSearchApi}
      />
      <div className={noSearchClass}>
        please select a start and end date
      </div>
      <Results
      apiData={apiData}
      />
    </div>

    </div>
  ); 

}

export default App;
