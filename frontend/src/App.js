import './App.css';
import Board from './components/Board'
import Info from './components/Info';
import ShipContainer from './components/ShipContainer';
import Grid from './components/Grid'
import GameDisplay from './components/GameDisplay';
import GridDisplay from './components/GridDisplay';
import { useState } from 'react';
import GridOpponent from './components/GridOpponent';
import GridUser from './components/GridUser';

function App() {
  const WIDTH = 10

  const [isHorizontal, setIsHorizontal] = useState(true)

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

  return (
    <div className="App">

      <div className="container">
        <GridUser shipArray={shipArray}></GridUser>
        <GridOpponent shipArray={shipArray}></GridOpponent>
      </div>

      <Info toggleHorizontal={toggleHorizontal}/>
      <GridDisplay shipArray={shipArray} isHorizontal={isHorizontal}></GridDisplay>
    </div>
  );
}

export default App;