import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: 'flex',
    flex: '3 0 auto',
  },
  contentSideBar: {
    flex: 2,
    borderColor: 'black',
    alignSelf: 'stretch',
  },
  contentBody: {
    flex: 10,
    borderColor: 'black',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  spacingStuff: {
    padding: theme.spacing(0, 0),
  },
  contentWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flex: '1 0 auto',
  },
  paperClass: {
    flex: '1 0 auto',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonStyles: {
    alignSelf: 'center',
  },

}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer}>
      <div className={classes.contentBody}>
        <Paper style={{ margin: 10, padding: 30 }} className={classes.paperClass}>
          <div className={classes.buttonStyles}>Centered</div>
        </Paper>
      </div>
    </div>
  );
};

export default Content;
