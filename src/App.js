import "./App.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <img
        className="background-image"
        src="./images/pokemon-background.jpg"
        alt="background"
      ></img>
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
