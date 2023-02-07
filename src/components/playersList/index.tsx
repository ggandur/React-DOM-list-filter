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
          <img
            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
            alt=""
            height={"50px"}
          />
          <a href="#">{player.firstName + " " + player.lastName}</a>
        </PlayersListWrapper>
      ))}
    </>
  );
}

export default PlayersList;
