import React from 'react'

function Results(props) {

const {
    apiData
} = props


console.log(apiData)

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
                            {neObject.name}
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
