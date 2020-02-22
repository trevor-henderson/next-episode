import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  display: flex;;
  justify-content: flex-end;
  align-items: center;
  background-color: #006666;
  height: 3rem;
`;

const NavBarItemWrapper = styled.a`
  font-size: 1rem;
  margin-right: 1rem;
  color: #880000;
  
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;


const NavBar = () => (
  <NavBarWrapper>
    <NavBarItemWrapper>Home</NavBarItemWrapper>
    <NavBarItemWrapper>About</NavBarItemWrapper>
    <NavBarItemWrapper>Settings</NavBarItemWrapper>
  </NavBarWrapper>
);

export default NavBar;
