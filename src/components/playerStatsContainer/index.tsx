import PlayerType from "../../interfaces/playerType";
import PlayerStatsContainerWrapper from "./PlayerStatsContainerStyle";

type PlayerStatsContainerProps = {
  activePlayerCard: PlayerType;
};

function PlayerStatsContainer(props: PlayerStatsContainerProps) {
  return (
    <PlayerStatsContainerWrapper>
      College: {props.activePlayerCard.collegeName}
      <br />
      País: {props.activePlayerCard.country}
      <br />
      Draftado em: {props.activePlayerCard.draft?.seasonYear}
      <br />
      Altura: {props.activePlayerCard.heightMeters + "m"}
      <br />
      Posição: {props.activePlayerCard.pos}
      <br />
      Peso: {props.activePlayerCard.weightKilograms + "kg"}
      <br />
      Temporadas jogadas: {props.activePlayerCard.yearsPro}
    </PlayerStatsContainerWrapper>
  );
}

export default PlayerStatsContainer;
