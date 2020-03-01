import React from 'react';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerClass: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',

  },
  headerTitle: {
    flex: 9,
  },
  fixedButton: {
    flex: 3,
  },
  headerWrapper: {
    flex: '0 4 auto',
  },
}));

const Header = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerWrapper}>
      <ToolBar className={classes.headerClass}>
        <Button size="small" className={classes.fixedButton}>
          place holder for hamburger
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.headerTitle}
        >
          {title || null}
        </Typography>
        <Button variant="outlined" size="small" className={classes.fixedButton}>
          Sign Up
        </Button>
      </ToolBar>
      {children || null}
    </div>
  );
};

export default Header;
