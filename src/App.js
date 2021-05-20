import { useState, useEffect } from 'react';
import Results from './Results';
import SearchForm from './SearchForm';
import './App.css';



function App() {

const [apiData, setApiData] = useState()
const [startDate, setStartDate] = useState()
const [endDate, setEndDate] = useState()

const handleSetStartDate = (e) =>{
  console.log('handlestart')
  setStartDate(e.target.value)
  console.log(startDate)
}

const handleSetEndDate = (e) =>{
  console.log('handleend')
  setEndDate(e.target.value)
  console.log(endDate)
}

const handleSearchApi = (e) =>{
  e.preventDefault()
  if(startDate !== undefined && endDate !== undefined){
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`)
    .then(response => response.json())
    .then(data => setApiData(data))
    console.log(apiData)
  } else{
    console.log('no api pull')
    // let x = document.getElementsByClassName("noDate")
    // x.styles.display = 'none'
  }


}








  return (
    <div className="App">
      REACT
      <SearchForm
      startDate={startDate}
      endDate={endDate}
      handleSetStartDate={handleSetStartDate}
      handleSetEndDate={handleSetEndDate}
      handleSearchApi={handleSearchApi}
      />
      <div className="noDate">
        please select a start and end date
      </div>
      <Results
      apiData={apiData}
      />
    </div>
  ); 

}

export default App;
