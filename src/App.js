import { useState, useEffect } from 'react';
import Results from './Results';
import './App.css';



function App() {

const [apiData, setApiData] = useState([])

console.log('api data')
console.log(apiData)



useEffect(() =>{
  // fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`)
  // .then(response => response.json())
  // .then(data => setApiData(data))
}, [])







  return (
    <div className="App">
      REACT
      <Results
      apiData={apiData}
      />
    </div>
  );
}

export default App;
