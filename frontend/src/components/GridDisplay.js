import React, { useState, useRef, useEffect } from 'react'
import './styles/GridDisplay.css'
import Ship from './Ship'
const GridDisplay = ({ shipArray, isHorizontal }) => {

    const destroyerRef = useRef()
    const submarineRef = useRef()
    const cruiserRef = useRef()
    const battleshipRef = useRef()
    const carrierRef = useRef()

    useEffect(() => {
        
        // toggleShipStyle(destroyerRef,"destroyer")
        // toggleShipStyle(submarineRef, 'submarine')
        // toggleShipStyle(cruiserRef, 'cruiser')
        // toggleShipStyle(battleshipRef, 'battleship')
        // toggleShipStyle(carrierRef, 'carrier')

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

    function handleDragStart(e, data) {
        console.log(e, data);
    }

    function handleMouseDrop(e){
        console.log(e);
    }

    return (
            <div className="grid-display" >

                <Ship
                    handleDragStart={handleDragStart}
                    isHorizontal={isHorizontal} 
                    onMouseDown={handleMouseDown} 
                    name="destroyer" 
                    nodes={2}>
                </Ship>

                <Ship
                    handleDragStart={handleDragStart}
                    isHorizontal={isHorizontal} 
                    onMouseDown={handleMouseDown} 
                    name="submarine" 
                    nodes={3}>
                </Ship>


                <Ship
                    handleDragStart={handleDragStart}
                    isHorizontal={isHorizontal} 
                    onMouseDown={handleMouseDown} 
                    name="cruiser" 
                    nodes={3}>
                </Ship>
                
                <Ship
                    handleDragStart={handleDragStart}
                    isHorizontal={isHorizontal} 
                    onMouseDown={handleMouseDown} 
                    name="battleship" 
                    nodes={4}>
                </Ship>

                <Ship
                    handleDragStart={handleDragStart}
                    isHorizontal={isHorizontal} 
                    onMouseDown={handleMouseDown} 
                    name="carrier" 
                    nodes={5}>
                </Ship>



                
            </div>
    )
}

export default GridDisplay
