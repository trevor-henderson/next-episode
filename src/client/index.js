import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavButton from './components/navigators/nav-button';
import ToolBar from './components/navigators/tool-bar';

const tempButtons = [
  <NavButton textField="one" />,
  <NavButton textField="two" />,
  <NavButton textField="three" />];

class App extends React.Component {
  render() {
    return (
      <ToolBar>
        {tempButtons}
      </ToolBar>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
