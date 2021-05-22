import React from 'react';
import './Results.css';

function Results(props) {

const {
    apiData
} = props




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
                                <div>
                                <span>Velocity: {neObject.close_approach_data[0].relative_velocity.miles_per_hour} mph</span>
                                </div>

                            </div>
                        )
                    }))
                })
            }
            </div>

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
