import DraftType from "./draftType";
import TeamType from "./teamType";

interface PlayerType {
  collegeName: string;
  country: string;
  dateOfBirthUTC: string;
  draft: DraftType;
  firstName: string;
  heightFeet: number;
  heightInches: number;
  heightMeters: number;
  jersey: number;
  lastAffiliation: string;
  lastName: string;
  nbaDebutYear: number;
  personId: number;
  pos: string;
  teamId: number;
  teams: Array<TeamType>;
  weightKilograms: number;
  weightPounds: number;
  yearsPro: number;
}

export default PlayerType;
