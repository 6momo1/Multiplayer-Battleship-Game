import './App.css';
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
  const dragItem = useRef()
  const dragNode = useRef()
  const [dragging, setDragging] = useState(false)

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

  function handleDragEnter(e, params){
    console.log(e.target, params);
    console.log("dragItem:",dragItem.current);

  }

  function handleDragStart(e, params){
        dragItem.current = params;
        dragNode.current = e.target
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(()=> {
            setDragging(true)
        },0)
        console.log(dragItem.current)
  }

  function handleDragEnd() {
        console.log("Ending drag")
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