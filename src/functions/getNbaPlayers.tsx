import axios from "axios";
import PlayerType from "../interfaces/playerType";

function getNbaPlayers(
  setPlayersArray: React.Dispatch<React.SetStateAction<never[]>>,
  playersArray: Array<PlayerType>,
  favoritePlayersArray: Array<PlayerType>
) {
  axios
    .get("http://data.nba.net/10s/prod/v1/2016/players.json")
    .then((response) => {
      console.log(response.data);
      setPlayersArray(response.data.league.standard);
    })
    .catch((e) => {
      console.error(e);
    });
}

export default getNbaPlayers;
