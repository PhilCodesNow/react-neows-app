import React, { useState } from 'react';
import View from './View';
import './Results.css';

function Results(props) {

const {
    apiData
} = props

const [selectedTank, setSelectedTank] = useState([])

const handleSelectTank = (neo) =>{
    console.log('s T')
    console.log(neo.name)
    setSelectedTank(neo)
}

if(apiData !== undefined){
    return (
        <div className="results">
            <div className="results__box">
            {
                Object.values(apiData.near_earth_objects).map(array =>{
                    return (
                        array.map(neObject =>{
                        return (
                            <div key={neObject.name}
                            className="results__box__div">
                                <div>
                                <span>Name: {neObject.name}</span>
                                </div>
                                <div>
                                <span>Approach Date: {neObject.close_approach_data[0].close_approach_date}</span>
                                </div>
                                <div id="link">
                                <a href='#'
                                onClick={() => handleSelectTank(neObject)}>More</a>
                                </div>

                            </div>
                        )
                    }))
                })
            }
            </div>
            <View
            selectedTank={selectedTank}
            />
        </div>
    )
} else {
    return(
        <div className="results">
            Select your dates to search!
        </div>
    )
}
   
}

export default Results
