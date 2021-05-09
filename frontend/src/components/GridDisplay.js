import React, { useState, useRef, useEffect } from 'react'
import './styles/GridDisplay.css'
import Ship from './Ship'
const GridDisplay = (props, { shipArray, isHorizontal }) => {


    const dragItem = useRef()
    const dragNode = useRef()
    const [dragging, setDragging] = useState(false)


    function handleDragStart(e, params) {

        dragItem.current = params;
        dragNode.current = e.target
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(()=> {
            setDragging(true)
        },0)
        console.log(dragItem.current);
    }

    function handleDragEnd() {
        console.log("Ending drag")
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null
        dragNode.current = null
    }




    return (
            <div className="grid-display" >
                {props.children}
            </div>
    )
}

export default GridDisplay
