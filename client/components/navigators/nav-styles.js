import styled from 'styled-components';

export const StyledToolBar = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    background: black;
`;

export const StyledNavButton = styled.div`
  background: grey;
  padding: 5px;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  line-height: 10px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
`;
