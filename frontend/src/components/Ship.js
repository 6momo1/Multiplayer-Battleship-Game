import React, { useRef, useEffect } from 'react'

const Ship = (ship ) => {

    const shipRef = useRef()

    useEffect(() => {
        
        toggleShipStyle(shipRef, ship.name)
        return () => {
        }
    }, [ship.isHorizontal])

    // create div nodes by creating their length and assigning an ID
    function createShipNodes(name, size){
        const divs = []
        for (let i = 0; i < size; i++) {
            divs.push(<div id={name+"-"+i} key={name+"-"+i}></div>)
        }
        return divs
    }

    // toggle the ship style to rotate the ship
    function toggleShipStyle(shipRef, shipName){
        shipRef.current.className = (ship.isHorizontal) ? `${shipName}-container-vertical` : `${shipName}-container`
    }

    return (
        <div
            onDragStart={ e => {
                ship.handleDragStart(e, { "name":ship.name, "nodes":ship.nodes, "isHorizontal":ship.isHorizontal })
                }
            }
            ref={shipRef}
            className={`ship ${ship.name}-container`}
            draggable="true"
        >
            {createShipNodes(ship.name, ship.nodes)}
        </div>
    )
}

export default Ship
