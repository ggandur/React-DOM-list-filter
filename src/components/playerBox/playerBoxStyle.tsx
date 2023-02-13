import styled from "styled-components";

const PlayerBoxWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  padding-bottom: 0;
  width: 200px;
  :hover {
    background-color: #eee;
  }
  :active {
    background-color: rgb(207, 207, 207);
  }
`;

export default PlayerBoxWrapper;
