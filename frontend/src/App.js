import './App.css';
import Board from './components/Board'
import Info from './components/Info';
import ShipContainer from './components/ShipContainer';
import Grid from './components/Grid'
import GameDisplay from './components/GameDisplay';
import GridDisplay from './components/GridDisplay';

function App() {

  return (
    <div className="App">

      <div className="container">
        <Grid player="user"></Grid>
        <Grid player="opponent"></Grid>
      </div>

      <Info/>
      {/* <ShipContainer/> */}
      <GridDisplay ></GridDisplay>
    </div>
  );
}

export default App;
