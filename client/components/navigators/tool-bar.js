import React from 'react';
import { StyledNavButton, StyledToolBar } from './nav-styles';

const ToolBar = ({ children }) => {
  const navButtons = children.map((button) => (
    <li>
      <StyledNavButton>
        {button}
      </StyledNavButton>
    </li>
  ));
  return (
    <StyledToolBar>
      {navButtons}
    </StyledToolBar>
  );
};

export default ToolBar;