import "./App.css";
import { useEffect, useState } from "react";
import getNbaPlayers from "./functions/getNbaPlayers";
import PlayersList from "./components/playersList";
import filterNames from "./functions/filterNames";

function App() {
  const [playersArray, setPlayersArray] = useState([]);

  useEffect(() => {
    getNbaPlayers(setPlayersArray);
  }, []);

  document.getElementById("searchBar")?.addEventListener("input", filterNames);

  return (
    <div className="HomePage">
      <div className="Title">
        <h2>Jogadores Ativos da NBA</h2>
        <input type="text" id="searchBar" placeholder="Pesquisar jogador..." />
      </div>
      <PlayersList playersArray={playersArray} />
    </div>
  );
}

export default App;
