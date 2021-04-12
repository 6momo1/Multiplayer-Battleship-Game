import React from 'react'
import './styles/Grid.css'

const Grid = ({ player }) => {
    return (
        <div>
            <div className="grid" className={"grid-" + player}></div>
        </div>
    )
}

export default Grid
