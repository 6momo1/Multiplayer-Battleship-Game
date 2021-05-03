import React, { useState } from 'react'
import './styles/Grid.css'

const GridOpponent = ({ player }) => {

    const WIDTH = 10 

    const [nodes, setNodes] = useState(createNodes())

    function createNodes() {
        const arr = []
        for (let i = 0; i < WIDTH*WIDTH; i++) {
            arr.push(0)
        }  
        return arr
    }


    return (
        <div>
            <div className="grid" className="grid-opponent">
                { nodes.map( (node, nodeIdx) => (
                    <div className="node" id={"opponent"+nodeIdx}></div>
                )) }
            </div>
        </div>
    )
}

export default GridOpponent