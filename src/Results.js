import React from 'react'

function Results(props) {

const {
    apiData
} = props




if(apiData !== undefined){
    return (
        <div>
            RESULTS PAGE
            {
                Object.values(apiData.near_earth_objects).map(array =>{
                    return (
                        array.map(neObject =>{
                        return (
                            <div key={neObject.name}>
                            <span>{neObject.name}</span>
                            <span>{neObject.close_approach_data[0].close_approach_date}</span>
                            </div>
                        )
                    }))
                })
            }
        </div>
    )
} else {
    return(
        <div>
            Results page no api pull
        </div>
    )
}
   
}

export default Results
