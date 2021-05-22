import React from 'react';
import './View.css';

function View(props) {
    const {
        selectedTank
    } = props
    return (
        <div className="view">
            {selectedTank.name}
        </div>
    )
}

export default View
