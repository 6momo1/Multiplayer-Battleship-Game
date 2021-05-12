import './App.css';
import './components/GridDisplay'
import GridDisplay from './components/GridDisplay';
import Info from './components/Info';
import { useState, useRef } from 'react';
import GridOpponent from './components/GridOpponent';
import GridUser from './components/GridUser';
import Ship from './components/Ship'
import Board from './components/Board'
import Grid from './components/Grid'
import GameDisplay from './components/GameDisplay';
import BoardTest from './components/BoardTest';
import CardTest from './components/CardTest';


function App() {
  const WIDTH = 10

  const [isHorizontal, setIsHorizontal] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [hoveredNode, setHoveredNode] = useState(null)

  const dragItem = useRef()
  const dragNode = useRef()
  const hoveredNodeRef = useRef()

  const [shipArray, setShipArray] = useState(
    [
      {
        name: 'destroyer',
        directions: [
          [0,1],
          [0, WIDTH]
        ]
      },
      {
        name: 'submarine',
        directions: [
          [0,1,2],
          [0, WIDTH, WIDTH*2]
        ]
      },
      {
        name: 'cruiser',
        directions: [
          [0,1,2],
          [0, WIDTH, WIDTH*2]
        ]
      },
      {
        name: 'battleship',
        directions: [
          [0,1,2,3],
          [0, WIDTH, WIDTH*2,WIDTH*3]
        ]
      },
      {
        name: 'carrier',
        directions: [
          [0,1,2,3,4],
          [0, WIDTH, WIDTH*2, WIDTH*3, WIDTH*4]
        ]
      },
  ]
  )

  function toggleHorizontal() {
    setIsHorizontal(!isHorizontal)
    console.log(isHorizontal);
  }

  function placeShipOnGrid(){

    // get the name of the ship so we know what color to apply to the nodes
    const shipName = dragItem.current.name

    if (hoveredNodeRef.current.classList.contains('taken')){
      return false

    } else {
      
      // add classes to the nodes that the ship is occupying, and apply color
      hoveredNodeRef.current.classList.add('taken', shipName)

      // for (let i = 0; i < dragItem.current.nodes; i++) {
        
      // }

      return true
    }
  }

  function handleDragEnter(e, params){
    // log the node at which the ship is hovering
    setHoveredNode(params)

    // set current hovered node
    hoveredNodeRef.current = e.target
  }

  function handleDragStart(e, params){
        dragItem.current = params;
        dragNode.current = e.target
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(()=> {
            setDragging(true)
        },0)
  }

  function handleDragEnd() {
        console.log("Ending drag")

        // place the dragging ship on the grid if applicable
        placeShipOnGrid()

        // reset the states
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null
        dragNode.current = null
    }

  return (
    <div className="App">

      <div className="container">
        <GridUser 
          shipArray={shipArray}
          handleDragEnter={handleDragEnter}
        >
        </GridUser>

        <GridOpponent shipArray={shipArray}>

        </GridOpponent>
      </div>

      <Info toggleHorizontal={toggleHorizontal}>
      </Info>

      <GridDisplay shipArray={shipArray} isHorizontal={isHorizontal}>
        {
            shipArray.map(ship => {
                return (
                    <Ship 
                        name={ship.name} 
                        nodes={ship.directions[0].length} 
                        handleDragStart={handleDragStart}
                        dragging={dragging}
                        isHorizontal={isHorizontal}
                    >
                    </Ship>
                )
            })
        }
      </GridDisplay>

    </div>
  );
}

export default App;