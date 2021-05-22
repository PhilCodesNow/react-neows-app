import React from 'react';
import './View.css';

function View(props) {
    const {
        selectedNeo,
        handleUnselectNeo
    } = props


    if(selectedNeo !== undefined){
        let hazardous
        if(selectedNeo.is_potentially_hazardous_asteroid === true){
            hazardous = 'true'
        } else{
            hazardous = 'false'
        }

        return (
            <div className="view">

                <div className="view__header"><h2>{selectedNeo.name}</h2></div>
                <div>Estimated Diameter: {selectedNeo.estimated_diameter.miles.estimated_diameter_min} miles - {selectedNeo.estimated_diameter.miles.estimated_diameter_max} miles</div>
                <div>
                    Distance NEO Will Miss Earth By: {selectedNeo.close_approach_data[0].miss_distance.kilometers}
                </div>
                <div>
                    Potentially Hazardous: {hazardous}
                </div>
                <div>
                    NEO Speed: {selectedNeo.close_approach_data[0].relative_velocity.miles_per_hour} mph
                </div>

                <button onClick={handleUnselectNeo}>Close</button>
            </div>
        )
    } else {
        return(<div></div>)
    } 

}

export default View
