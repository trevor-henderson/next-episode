import React from 'react';

const NavButton = ({ textField }) => (
  <button data-testid="nav-button" type="button">
    {textField}
  </button>
);

export default NavButton;
