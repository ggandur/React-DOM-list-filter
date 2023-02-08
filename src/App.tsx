import "./App.css";
import { SetStateAction, useEffect, useState } from "react";
import getNbaPlayers from "./functions/getNbaPlayers";
import PlayersList from "./components/playersList";
import filterNames from "./functions/filterNames";
import PlayerStatsPopup from "./components/playerStatsPopup";

function App() {
  const [playersArray, setPlayersArray] = useState([]);
  const [renderPlayerCard, setRenderPlayerCard] = useState(false);
  const [activePlayerCard, setActivePlayerCard] = useState({});

  useEffect(() => {
    getNbaPlayers(setPlayersArray);
  }, []);

  document.getElementById("searchBar")?.addEventListener("input", filterNames);

  return (
    <div className="HomePage">
      <PlayerStatsPopup
        active={renderPlayerCard}
        setRenderPlayerCard={setRenderPlayerCard}
        activePlayerCard={activePlayerCard}
      />
      <div className="Title">
        <h2>Jogadores Ativos da NBA</h2>
        <input type="text" id="searchBar" placeholder="Pesquisar jogador..." />
      </div>
      <PlayersList
        playersArray={playersArray}
        setRenderPlayerCard={setRenderPlayerCard}
        setActivePlayerCard={setActivePlayerCard}
      />
    </div>
  );
}

export default App;
