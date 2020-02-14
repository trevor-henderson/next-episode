import styled from 'styled-components';

export const StyledToolBar = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr [col-start]);
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 1;
    padding: 0;
    align-content: space-evenly;
    justify-content: space-evenly;
    margin: 0;
    background: black;
    list-style-type: none;
`;

export const StyledNavButton = styled.div`
  background: grey;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
`;
