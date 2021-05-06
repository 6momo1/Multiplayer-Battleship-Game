import React, { useState, useRef, useEffect } from 'react'
import './styles/GridDisplay.css'
import Ship from './Ship'
const GridDisplay = ({ shipArray, isHorizontal }) => {


    useEffect(() => {
        
        return () => {

        }

    }, [isHorizontal])


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

                {
                    shipArray.map(ship => {
                        return (
                            <Ship 
                                name={ship.name} 
                                nodes={ship.directions[0].length} 
                                handleDragStart={handleDragStart} 
                                isHorizontal={isHorizontal}  
                                onMouseDown={handleMouseDown}> 
                            </Ship>)
                    })
                }

            </div>
    )
}

export default GridDisplay
