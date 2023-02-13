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
  favoritePlayersArray: Array<PlayerType>;
};

let buttonElement, playerIndex;

function PlayerBox(props: PlayerBoxProps) {
  return (
    <PlayerBoxWrapper>
      <button
        className="FavoritePlayerButton"
        id={`button${props.index}`}
        style={{
          backgroundColor: props.player.favorite ? "red" : "transparent",
        }}
        onClick={() => {
          buttonElement = document.getElementById(`button${props.index}`);
          if (!props.player.favorite) {
            props.player.favorite = true;
            buttonElement
              ? (buttonElement.style.backgroundColor = "red")
              : null;
            props.favoritePlayersArray.push(props.player);
            props.setFavoritePlayersArray(props.favoritePlayersArray);
          } else {
            props.player.favorite = false;
            buttonElement
              ? (buttonElement.style.backgroundColor = "transparent")
              : null;
            playerIndex = props.favoritePlayersArray.indexOf(props.player);
            props.favoritePlayersArray.splice(playerIndex, 1);
            props.setFavoritePlayersArray(props.favoritePlayersArray);
          }
          console.log("Array favoritos atualizado: ");
          console.log(props.favoritePlayersArray);
          window.localStorage.setItem(
            "FAVORITE_PLAYERS",
            JSON.stringify(props.favoritePlayersArray)
          );
          //console.log(props.playersArray);
        }}
      ></button>
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
