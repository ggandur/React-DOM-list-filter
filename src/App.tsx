import "./App.css";
import { useEffect, useState } from "react";
import getNbaPlayers from "./functions/getNbaPlayers";
import PlayersList from "./components/playersList";
import filterNames from "./functions/filterNames";
import PlayerStatsPopup from "./components/playerStatsPopup";
import PlayerType from "./interfaces/playerType";

function App() {
  const [playersArray, setPlayersArray] = useState([]);
  const [renderPlayerCard, setRenderPlayerCard] = useState(false);
  const [renderFavoritePlayersOnly, setRenderFavoritePlayersOnly] =
    useState(Boolean);
  const [activePlayerCard, setActivePlayerCard] = useState({});
  const [favoritePlayersArray, setFavoritePlayersArray] = useState<
    Array<number>
  >([]);
  const [loading, setLoading] = useState(true);
  const storedFavoritePlayers = window.localStorage.getItem("FAVORITE_PLAYERS");

  useEffect(() => {
    storedFavoritePlayers &&
      setFavoritePlayersArray(JSON.parse(storedFavoritePlayers as string));
    getNbaPlayers(setPlayersArray, setLoading);
  }, []);

  document.getElementById("searchBar")?.addEventListener("input", filterNames);

  const editedPlayersArray = playersArray.map((player: PlayerType) => {
    player = {
      ...player,
      isFavorite: favoritePlayersArray.includes(player.personId!),
    };
    return player;
  });

  return !loading ? (
    <div className="HomePage">
      <PlayerStatsPopup
        active={renderPlayerCard}
        setRenderPlayerCard={setRenderPlayerCard}
        activePlayerCard={activePlayerCard}
      />
      <button
        className="ShowFavoritedPlayersButton"
        onClick={() => {
          renderFavoritePlayersOnly
            ? setRenderFavoritePlayersOnly(false)
            : setRenderFavoritePlayersOnly(true);
        }}
      ></button>
      <div className="Title">
        <h2>Jogadores Ativos da NBA</h2>
        <input type="text" id="searchBar" placeholder="Pesquisar jogador..." />
      </div>
      <PlayersList
        playersArray={editedPlayersArray}
        setRenderPlayerCard={setRenderPlayerCard}
        setActivePlayerCard={setActivePlayerCard}
        renderFavoritePlayersOnly={renderFavoritePlayersOnly}
        setFavoritePlayersArray={setFavoritePlayersArray}
        favoritePlayersArray={favoritePlayersArray}
      />
    </div>
  ) : (
    <div>Carregando</div>
  );
}

export default App;
