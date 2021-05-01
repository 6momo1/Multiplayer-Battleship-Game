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


    return (
            <div className="grid-display" >

                <div className="ship destroyer-container" draggable="true">
                    { createShipNodes("destroyer", 2) }
                </div>

                <div className="ship submarine-container" draggable="true">
                    { createShipNodes("submarine", 3) }
                </div>


                <div className="ship cruiser-container" draggable="true">
                    { createShipNodes("cruiser", 3) }
                </div>
                
                <div className="ship battleship-container" draggable="true">
                    { createShipNodes("battleship", 4) }
                </div>

                <div className="ship carrier-container" draggable="true">
                    { createShipNodes("carrier", 5) }
                </div>


                
            </div>
    )
}

export default GridDisplay
