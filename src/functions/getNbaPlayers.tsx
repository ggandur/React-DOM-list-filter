import axios from "axios";

function getNbaPlayers(
  setPlayersArray: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  axios
    .get("http://data.nba.net/10s/prod/v1/2022/players.json")
    .then((response) => {
      console.log(response.data);
      setPlayersArray(response.data.league.standard);
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => setLoading(false));
  // .finally(() => setTimeout(() => setLoading(false), 2000));
}

export default getNbaPlayers;
