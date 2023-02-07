import axios from "axios";

function getNbaPlayers(setPlayersArray: React.Dispatch<React.SetStateAction<never[]>>) {
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
