import './App.css';
import './components/GridDisplay'
import GridDisplay from './components/GridDisplay';
import Info from './components/Info';
import { useState, useRef, useEffect } from 'react';
import GridOpponent from './components/GridOpponent';
import GridUser from './components/GridUser';
import Ship from './components/Ship'


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
    console.log(gridRef.current);
  }, [])

  function addToUserNodesRef(e) {
    console.log(e);
  }


  function toggleHorizontal() {
    setIsHorizontal(!isHorizontal)
    console.log(isHorizontal);
  }

  function placeShipOnGrid(){


    // INITIATING CONSTANTS:

    // get the name of the ship so we know what color to apply to the nodes
    const shipName = dragItem.current.name
    const shipIsHorizontal = dragItem.current['isHorizontal']
    const hoveredNodeIndex = hoveredNodeValuesRef.current.node // int: current node position to be placed
    const shipLength = dragItem.current.node // ship length 
    const lastShipIndex = hoveredNodeIndex + shipLength

     
    // find the ship schema within the ship array state
    const shipAttributes = shipArray.filter( ship => {
      return ship.name == shipName
    })[0]


    // Create boundaries for horizontal placed ships
    const createHorizontalBannedNodes = () => {
      const arr = []
      for (let i = 0; i <10 ; i++) {
        arr.push(i* 10)
        arr.push(i*10 + 1)
        arr.push(i*10 + 2)
        arr.push(i*10 + 3)
      }
      return arr
    } 

    // Create boundaries for vertical placed ships
    const createVerticalBannedNodes = () => {
      const arr = []
      for ( let i = 99; i >= 60; i--) {
        arr.push(i)
      }
      return arr
    }

    // Error handling: array holds nodes to prevent ship nodes to go overboard 
    const notAllowedHorizontal = createHorizontalBannedNodes().splice(0, 10* lastShipIndex)
    const NotAllowedVertical = createVerticalBannedNodes().splice(0, 10* lastShipIndex)


    console.log(dragItem.current);
    console.log(shipIsHorizontal);
    console.log(shipAttributes);
    console.log(hoveredNodeValuesRef.current); // {id, node, player}



    // ERROR HANDLING: 

    // Check if ship is outside of grid
    if ( lastShipIndex > 99 ) {
      return false
    }

    // check if horizontal ship placement already contains class 'taken', AND check if node is not an unathorized node
    if ( !shipIsHorizontal ){

      for (let i = 0; i < shipLength; i ++){
        const currentNode = hoveredNodeIndex + i
        const taken = gridRef.current.childNodes[currentNode].classList.contains('taken')
        const outOfBound = !notAllowedHorizontal.includes(currentNode)
        console.log("adsfasdf");
        console.log(taken, outOfBound);

        if ( taken || outOfBound ) {
          console.log('excecuted');
          return false
        }
      }



    } else {

      // check if vertical ship placement already contains class 'taken', AND check if node is not in a unathorized node

      for (let i = 0; i <= shipLength; i ++){
        const relativePostion = shipAttributes['directions'][1][i]
        const currentNode = hoveredNodeIndex + relativePostion
        const taken = gridRef.current.childNodes[currentNode].classList.contains('taken')
        const outOfBound = !NotAllowedVertical.includes(currentNode)

        console.log("testasdfasdfsa");

        if ( taken || outOfBound ) {
          console.log('excecuted');
          return false
        }
      }

    }




    // PLACING SHIP NODES:

    // if ship is horizontal, color the grid nodes incremented by 1
    if (!shipIsHorizontal) { 
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