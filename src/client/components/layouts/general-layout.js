import React from 'react';
import ToolBar from '../navigators/tool-bar';
import WelcomeBody from '../bodies/welcome-body';

const GeneralLayout = ({ children }) => (
  <>
    <ToolBar>
      {children}
    </ToolBar>
    <WelcomeBody />
  </>
);

export default GeneralLayout;
