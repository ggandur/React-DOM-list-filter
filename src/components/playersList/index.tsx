import PlayerType from "../../interfaces/playerType";
import PlayerBox from "../playerBox";

type PlayersListProps = {
  playersArray: Array<PlayerType>;
  renderFavoritePlayersOnly: boolean;
  setRenderPlayerCard: React.Dispatch<React.SetStateAction<boolean>>;
  setActivePlayerCard: React.Dispatch<React.SetStateAction<{}>>;
  setFavoritePlayersArray: any;
  favoritePlayersArray: any;
};

function PlayersList(props: PlayersListProps) {
  return (
    <div className="PlayerContainer">
      {!props.renderFavoritePlayersOnly
        ? props.playersArray.map((player: PlayerType, index) => (
            <PlayerBox
              index={index}
              player={player}
              playersArray={props.playersArray}
              setRenderPlayerCard={props.setRenderPlayerCard}
              setActivePlayerCard={props.setActivePlayerCard}
              setFavoritePlayersArray={props.setFavoritePlayersArray}
              favoritePlayersArray={props.favoritePlayersArray}
            />
          ))
        : props.playersArray.map((player: PlayerType, index) => (
            <>
              {player.isFavorite == true ? (
                <PlayerBox
                  index={index}
                  player={player}
                  playersArray={props.playersArray}
                  setRenderPlayerCard={props.setRenderPlayerCard}
                  setActivePlayerCard={props.setActivePlayerCard}
                  setFavoritePlayersArray={props.setFavoritePlayersArray}
                  favoritePlayersArray={props.favoritePlayersArray}
                />
              ) : null}
            </>
          ))}
    </div>
  );
}

export default PlayersList;
