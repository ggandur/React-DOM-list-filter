import PlayerType from "../../interfaces/playerType";
import PlayersListWrapper from "./playersListStyle";

type PlayersListProps = {
  playersArray: Array<PlayerType>;
};

function PlayersList(props: PlayersListProps) {
  return (
    <>
      {props.playersArray.map((player: PlayerType, index) => (
        <PlayersListWrapper key={index}>
          <a href="#">{player.firstName + " " + player.lastName}</a>
        </PlayersListWrapper>
      ))}
    </>
  );
}

export default PlayersList;
