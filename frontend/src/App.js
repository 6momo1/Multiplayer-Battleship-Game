import './App.css';
import './components/GridDisplay'
import GridDisplay from './components/GridDisplay';
import Info from './components/Info';
import { useState, useRef, useEffect } from 'react';
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
  
  const hoveredNodeValuesRef = useRef(null)
  const dragItem = useRef()
  const dragNode = useRef()
  const hoveredNodeRef = useRef()
  const gridRef = useRef(null)  // reference the user grid nodes


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

  useEffect(() => {
    console.log(gridRef.current.childNodes[10]);
  }, [])

  function addToUserNodesRef(e) {
    console.log(e);
  }


  function toggleHorizontal() {
    setIsHorizontal(!isHorizontal)
    console.log(isHorizontal);
  }

  function placeShipOnGrid(){

    // get the name of the ship so we know what color to apply to the nodes
    const shipName = dragItem.current.name
    const shipLength = dragItem.current['nodes']
    const shipIsHorizontal = dragItem.current['isHorizontal']
    const hoveredNodeIndex = hoveredNodeValuesRef.current.node
  
    const shipAttributes = shipArray.filter( ship => {
      return ship.name == shipName
    })[0]

    console.log(shipIsHorizontal);
    console.log(shipAttributes);
    console.log(hoveredNodeValuesRef.current); // {id, node, player}


    if (hoveredNodeRef.current.classList.contains('taken')){
      return false

    } else {
      
      if (!shipIsHorizontal) {

        // if ship is horizontal, color the grid nodes incremented by 1
        shipAttributes['directions'][0].forEach( (node, idx) => {
          const currentNode = gridRef.current.childNodes[hoveredNodeIndex + idx]

          // check if current looped node is taken
          if ( currentNode.classList.contains('taken')) {
            return false
          }

          currentNode.classList.add(shipName, 'taken')
        })

      } else {

        // if ship is vertical, color the grid nodes incremented by 10
        shipAttributes['directions'][1].forEach( (relativePosition) => {

          const currentNode = gridRef.current.childNodes[hoveredNodeIndex + relativePosition] 
          
          // check if current looped node is taken
          if (currentNode.classList.contains('taken')){
            return false
          }

          currentNode.classList.add(shipName, 'taken')

        })
      }
      

      return true
    }
  }

  function handleDragEnter(e, params){
    // log the node at which the ship is hovering
    setHoveredNode(params)

    hoveredNodeValuesRef.current = params

    // set current hovered node
    hoveredNodeRef.current = e.target
    console.log(e.target);
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
          addToUserNodesRef={addToUserNodesRef}
          forwardedGridRef={gridRef}
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
                        key={ship.name}
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