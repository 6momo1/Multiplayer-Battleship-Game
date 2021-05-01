import React, { useState } from 'react'
import './styles/GridDisplay.css'

const GridDisplay = ({ player }) => {

    function createShipNodes(name, size){
        const divs = []
        for (let i = 0; i < size; i++) {
            divs.push(<div id={name+"-"+i}></div>)
        }
        return divs
    }

    function createShipContainer(name, size){
        <div className={`ship ${name}-container`} draggable="true">
            { createShipNodes(name, size) }
        </div>
    }

    return (
            <div className="grid" className={"grid-" + player}>

                <div className="ship destroyer-container" draggable="true">
                    <div id="destroyer-0"></div>
                    <div id="destroyer-1"></div>
                </div>

                <div className="ship submarine-container" draggable="true">
                    {createShipNodes("submarine", 3)}
                </div>


                <div>
                    
                </div>

                
            </div>
    )
}

export default GridDisplay
