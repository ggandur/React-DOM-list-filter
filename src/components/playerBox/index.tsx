import PlayersStarSVG from "../../assets/playersStarSVG";
import getPlayerPic from "../../functions/getPlayerPic";
import PlayerType from "../../interfaces/playerType";
import PlayersListWrapper from "../playersList/playersListStyle";
import PlayerBoxWrapper from "./playerBoxStyle";

type PlayerBoxProps = {
  index: number;
  player: PlayerType;
  playersArray: Array<PlayerType>;
  setRenderPlayerCard: React.Dispatch<React.SetStateAction<boolean>>;
  setActivePlayerCard: React.Dispatch<React.SetStateAction<{}>>;
  setFavoritePlayersArray: any;
  favoritePlayersArray: any;
};

let playerIndex;

function PlayerBox(props: PlayerBoxProps) {
  return (
    <PlayerBoxWrapper className="player_box">
      <button
        className="FavoritePlayerButton"
        id={`button${props.index}`}
        onClick={() => {
          if (!props.player.isFavorite) {
            props.player.isFavorite = true;
            props.favoritePlayersArray.push(props.player.personId);
            document.getElementById(
              `playersStarSVG${props.player.personId}`
            )!.style.fill = "#fece3c";
          } else {
            props.player.isFavorite = false;
            playerIndex = props.favoritePlayersArray.indexOf(
              props.player.personId
            );
            props.favoritePlayersArray.splice(playerIndex, 1);
            document.getElementById(
              `playersStarSVG${props.player.personId}`
            )!.style.fill = "transparent";
          }
          props.setFavoritePlayersArray(props.favoritePlayersArray);
          console.log("Array favoritos atualizado: ");
          console.log(props.favoritePlayersArray);
          window.localStorage.setItem(
            "FAVORITE_PLAYERS",
            JSON.stringify(props.favoritePlayersArray)
          );
        }}
      >
        {props.player.isFavorite ? (
          <PlayersStarSVG fill={"#fece3c"} personId={props.player.personId!} />
        ) : (
          <PlayersStarSVG
            fill={"transparent"}
            personId={props.player.personId!}
          />
        )}
      </button>
      <button
        className="PlayerBoxButton"
        onClick={() => {
          props.setRenderPlayerCard(true);
          props.setActivePlayerCard(props.player);
        }}
      >
        <PlayersListWrapper key={props.index}>
          {props.player.firstName + " " + props.player.lastName}
          <img
            src={getPlayerPic(props.player.personId)}
            alt=""
            height={"80px"}
          />
        </PlayersListWrapper>
      </button>
    </PlayerBoxWrapper>
  );
}

export default PlayerBox;
