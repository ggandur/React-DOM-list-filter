import styled from "styled-components";

const PlayersListWrapper = styled.li`
  border-radius: 12px;
  margin-top: -1px; /* Prevent double borders */
  background-color: transparent; /* Grey background color */
  display: flex; /* Make it into a block element to fill the whole list */
  flex-direction: column;
  align-items: center;
`;

export default PlayersListWrapper;
