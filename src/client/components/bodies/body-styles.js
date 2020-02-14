import styled from 'styled-components';

export const StyledWelcomeBody = styled.div`
display: grid;
  grid-template-rows: repeat(4, 1fr [row-start]);
  grid-template-columns: repeat(6, 1fr [col-start]);
   //grid-column-start: 5;
    //grid-column-end: 6;
  //grid-area: body;
  //grid-row-start: 1;
    //grid-row-end: 5;
    //justify-content: center;
    //align-content: center;
`;

export const WelcomeHeader = styled.h1`
    font-max-size: large;
    font-family: Dialog;
    color: #7f7f7f;
    //align-self: center;
    grid-column: 3;
    grid-row: 2;
`;
