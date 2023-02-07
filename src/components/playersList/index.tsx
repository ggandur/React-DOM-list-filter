import PlayerType from "../../interfaces/playerType";
import PlayersListWrapper from "./playersListStyle";

type PlayersListProps = {
  playersArray: Array<PlayerType>;
};

function PlayersList(props: PlayersListProps) {
  return (
    <>
      <div className="PlayerContainer">
        {props.playersArray.map((player: PlayerType, index) => (
          <PlayersListWrapper key={index}>
            <a href="#">{player.firstName + " " + player.lastName}</a>
            <img
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
              alt=""
              height={"80px"}
            />
          </PlayersListWrapper>
        ))}
      </div>
    </>
  );
}

export default PlayersList;
