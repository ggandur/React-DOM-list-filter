import styled from "styled-components";

const PlayersListWrapper = styled.li`
  a {
    text-decoration: none; /* Remove default text underline */
    font-size: 18px; /* Increase the font-size */
    color: black; /* Add a black text color */
    margin-left: 10px;
  }
  border: 1px solid #ddd; /* Add a border to all links */
  margin-top: -1px; /* Prevent double borders */
  margin-left: 10px;
  background-color: #f6f6f6; /* Grey background color */
  padding: 12px; /* Add some padding */
  display: block; /* Make it into a block element to fill the whole list */
  width: 100%;
  :hover {
    background-color: #eee; /* Add a hover effect to all links, except for headers */
  }
`;

export default PlayersListWrapper;
