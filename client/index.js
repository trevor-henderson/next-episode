/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Grid, Row, Col } from './components/layouts/BasicLayout';
import NavBar from './components/layouts/NavBar';
import CardList from './components/layouts/CardList';

const articles = [
  {
    title: 'foo',
    description: 'bar',
  },
  {
    title: 'foo1',
    description: 'bar1',
  },
  {
    title: 'foo2',
    description: 'bar2',
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <CardList articleArray={articles} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
