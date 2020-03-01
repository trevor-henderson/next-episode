import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './footer';
import Content from './content';
import FrontPageToolBar from '../navigators/front-page-tool-bar';
import Header from './header';

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
}));

const FrontPageLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title="The Next Episode">
        <FrontPageToolBar isSignedOn />
      </Header>
      <Content />
      <Footer />
    </div>
  );
};

export default FrontPageLayout;
