import React, { useState } from 'react'
import './styles/Grid.css'

const Grid = ({ player }) => {

    const WIDTH = 10 

    const [nodes, setNodes] = useState(createNodes(WIDTH))

    function createNodes() {
        const arr = []
        for (let i = 0; i < WIDTH*WIDTH; i++) {
            arr.push(0)
        }  
        return arr
    }


    return (
        <div>
            <div className="grid" className={"grid-" + player}></div>
            { nodes.map( (node, nodeIdx) => (
                <div id={nodeIdx}></div>
            )) }
        </div>
    )
}

export default Grid
