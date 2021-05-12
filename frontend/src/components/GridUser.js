import React, { useState } from 'react'
import './styles/Grid.css'

const GridUser = (props, { player }) => {

    const WIDTH = 10 

    const [nodes, setNodes] = useState(createNodes())

    function createNodes() {
        const arr = []
        for (let i = 0; i < WIDTH*WIDTH; i++) {
            const node = React.createElement('div',{
                className:"node", 
                id:`user-node${i}`
            })
            arr.push(node)
        }  
        return arr
    }


    return (
        <div>
            <div className="grid" className="grid-user">
                { nodes.map( (node, nodeIdx) => (
                    <div 
                        className="node" 
                        id={"user"+nodeIdx}
                        onDragEnter={ (e) => {
                            props.handleDragEnter(e, {"id":`user${nodeIdx}`, "node":nodeIdx, "player": "user"})
                        }}
                    >                        
                    </div>
                )) }
            </div>
        </div>
    )
}

export default GridUser