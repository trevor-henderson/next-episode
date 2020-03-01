import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  frontPageNavToolBar: {
    justifyContent: 'space-between',
    overFlowX: 'auto',
    borderBottom: `1px solid ${theme.palette.divider} `,
  },
  frontPageButton: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const FrontPageToolBar = ({ isSignedOn }) => {
  const classes = useStyles();

  return (
    isSignedOn
      ? (
        <Toolbar className={classes.frontPageNavToolBar}>
          <Button className={classes.frontPageButton}>
            Home Page
          </Button>
          <Button className={classes.frontPageButton}>
            Code Sandbox
          </Button>
          <Button className={classes.frontPageButton}>
            Videos
          </Button>
          <Button className={classes.frontPageButton}>
            Friends
          </Button>
          <Button className={classes.frontPageButton}>
            Sign Out
          </Button>
        </Toolbar>
      )
      : null
  );
};

export default FrontPageToolBar;
