import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavButton from './components/navigators/nav-button';
import GeneralLayout from './components/layouts/general-layout';

const tempButtons = [
  <NavButton textField="one" />,
  <NavButton textField="two" />,
  <NavButton textField="three" />,
  <NavButton textField="four" />,
  <NavButton textField="five" />];

class App extends React.Component {
  render() {
    return (
      <GeneralLayout>
        {tempButtons}
      </GeneralLayout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
