import React, { useState, useRef, useEffect } from 'react'
import './styles/GridDisplay.css'

const GridDisplay = ({ shipArray, isHorizontal }) => {

    const destroyerRef = useRef()
    const submarineRef = useRef()
    const cruiserRef = useRef()
    const battleshipRef = useRef()
    const carrierRef = useRef()

    useEffect(() => {
        
        toggleShipStyle(destroyerRef,"destroyer")
        toggleShipStyle(submarineRef, 'submarine')
        toggleShipStyle(cruiserRef, 'cruiser')
        toggleShipStyle(battleshipRef, 'battleship')
        toggleShipStyle(carrierRef, 'carrier')

        return () => {

        }

    }, [isHorizontal])


    // toggle the ship style to rotate the ship
    function toggleShipStyle(shipRef, shipName){
        shipRef.current.className = (isHorizontal) ? `${shipName}-container-vertical` : `${shipName}-container`
    }

    // create div nodes by creating their length and assigning an ID
    function createShipNodes(name, size){
        const divs = []
        for (let i = 0; i < size; i++) {
            divs.push(<div id={name+"-"+i}></div>)
        }
        return divs
    }

    function handleMouseDown(e) {
        console.log(e)
        console.log(e.target.childNodes.lengxth);
        console.log(e.target.childNodes[0].id);
    }

    function handleOnDragStart(data) {
        console.log(data);
    }

    function handleMouseDrop(e){
        console.log(e);
    }

    return (
            <div className="grid-display" >

                <div ref={destroyerRef} onMouseDown={handleMouseDown} className="ship destroyer-container" draggable="true">
                    { createShipNodes("destroyer", 2) }
                </div>

                <div 
                    ref={submarineRef} 
                    dragData={this} 
                    onDragStart={handleOnDragStart} 
                    onDrop={handleMouseDown} 
                    className="ship submarine-container" 
                    draggable="true">
                    { createShipNodes("submarine", 3) }
                </div>

                <div ref={cruiserRef} className="ship cruiser-container" draggable="true">
                    { createShipNodes("cruiser", 3) }
                </div>
                
                <div ref={battleshipRef} className="ship battleship-container" draggable="true">
                    { createShipNodes("battleship", 4) }
                </div>

                <div ref={carrierRef} className="ship carrier-container" draggable="true">
                    { createShipNodes("carrier", 5) }
                </div>


                
            </div>
    )
}

export default GridDisplay
