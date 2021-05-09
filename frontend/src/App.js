import './App.css';
import Board from './components/Board'
import Info from './components/Info';
import Grid from './components/Grid'
import GameDisplay from './components/GameDisplay';
import GridDisplay from './components/GridDisplay';
import { useState, useRef } from 'react';
import GridOpponent from './components/GridOpponent';
import GridUser from './components/GridUser';
import BoardTest from './components/BoardTest';
import CardTest from './components/CardTest';
// import './components/styles/Test.css'
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
  }

  function handleDragStart(e, params){
        dragItem.current = params;
        dragNode.current = e.target
        // dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(()=> {
            setDragging(true)
        },0)
        console.log(dragItem.current);
  }

  return (
    <div className="App">
    
      {/* <main className="flexbox">

        <BoardTest id="board-1" className="board">
          <CardTest id="card-1" className="card" draggable="true">
              <p>card one</p>
          </CardTest>
        </BoardTest>

        <BoardTest id="board-2" className="board">
          <CardTest id="card-2" className="card" draggable="true">
              <p>card two</p>
          </CardTest>
        </BoardTest>

      </main>  */}
    

      <div className="container">
        <GridUser 
          shipArray={shipArray}
          handleDragEnter={handleDragEnter}
        >
        </GridUser>

        <GridOpponent shipArray={shipArray}>

        </GridOpponent>
      </div>

      <Info toggleHorizontal={toggleHorizontal}/>

      <GridDisplay shipArray={shipArray} isHorizontal={isHorizontal}>
        
      </GridDisplay>

    </div>
  );
}

export default App;