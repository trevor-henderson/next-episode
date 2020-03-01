import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    borderTop: `1px solid ${theme.palette.divider} `,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    padding: theme.spacing(6, 0),
    flex: '0 0 90px',
  },
  footerContentClass: {
    flex: 2,
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <Typography
        color="primary"
        align="center"
        className={classes.footerContentClass}
        component="button"
      >
        Trevor Henderson
      </Typography>
      <Typography
        color="primary"
        align="center"
        className={classes.footerContentClass}
        component="button"
      >
        Helpful link list
      </Typography>
      <Typography
        color="primary"
        align="center"
        className={classes.footerContentClass}
        component="button"
      >
        Meet the team
      </Typography>
    </div>
  );
};

export default Footer;
