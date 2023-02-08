import getPlayerPic from "../../functions/getPlayerPic";
import PlayerType from "../../interfaces/playerType";
import PlayerStatsContainer from "../playerStatsContainer";
import PlayerStatsPopupWrapper from "./playerStatsPopupStyle";

type PlayerStatsPopupProps = {
  active: any;
  activePlayerCard: PlayerType;
  setRenderPlayerCard: React.Dispatch<React.SetStateAction<boolean>>;
};

function PlayerStatsPopup(props: PlayerStatsPopupProps) {
  return props.active ? (
    <PlayerStatsPopupWrapper>
      <h2>
        {props.activePlayerCard.jersey +
          " " +
          props.activePlayerCard.firstName +
          " " +
          props.activePlayerCard.lastName}
      </h2>
      <img src={getPlayerPic(props.activePlayerCard.personId)} alt="" />
      <PlayerStatsContainer activePlayerCard={props.activePlayerCard} />
      <button
        className="ClosePopupButton"
        onClick={() => {
          props.setRenderPlayerCard(false);
        }}
      >
        Fechar
      </button>
    </PlayerStatsPopupWrapper>
  ) : null;
}

export default PlayerStatsPopup;
