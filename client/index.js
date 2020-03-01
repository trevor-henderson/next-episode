/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import FrontPageLayout from './components/layouts/front-page-layout';

const App = () => (
  <>
    <CssBaseline />
    <FrontPageLayout />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
