import React from 'react'
import Grid from './Grid'
const GameDisplay = () => {
    return (
        <div>
            <Grid player="user"/>
            <Grid player="opponent"/>
        </div>
    )
}

export default GameDisplay
