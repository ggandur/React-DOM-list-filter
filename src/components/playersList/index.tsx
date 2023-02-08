import getPlayerPic from "../../functions/getPlayerPic";
import PlayerType from "../../interfaces/playerType";
import PlayersListWrapper from "./playersListStyle";

type PlayersListProps = {
  playersArray: Array<PlayerType>;
  setRenderPlayerCard: React.Dispatch<React.SetStateAction<boolean>>;
  setActivePlayerCard: React.Dispatch<React.SetStateAction<{}>>;
};

function PlayersList(props: PlayersListProps) {
  return (
    <>
      <div className="PlayerContainer">
        {props.playersArray.map((player: PlayerType, index) => (
          <button
            className="PlayerBox"
            onClick={() => {
              props.setRenderPlayerCard(true);
              props.setActivePlayerCard(player);
            }}
          >
            <PlayersListWrapper key={index}>
              {player.firstName + " " + player.lastName}
              <img src={getPlayerPic(player.personId)} alt="" height={"80px"} />
            </PlayersListWrapper>
          </button>
        ))}
      </div>
    </>
  );
}

export default PlayersList;
