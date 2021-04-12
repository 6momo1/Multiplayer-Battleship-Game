import './App.css';
import Board from './components/Board'
import Info from './components/Info';
import ShipContainer from './components/ShipContainer';
import Grid from './components/Grid'
import GameDisplay from './components/GameDisplay';

function App() {

  return (
    <div className="App">

      <div className="container">
        <Grid/>
        {/* <Board/>
        <Board/> */}
        <GameDisplay></GameDisplay>
      </div>

      <Info/>
      <ShipContainer/>
    </div>
  );
}

export default App;
