import React from 'react'
import Grid from './Grid'
import "../App.css"

const GameDisplay = () => {
    return (
        <div className="container">
            <Grid player="user"/>
            <Grid player="opponent"/>
        </div>
    )
}

export default GameDisplay
