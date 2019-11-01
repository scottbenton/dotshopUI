import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  div: {
    margin: theme.spacing(2),
    textAlign: 'center',
  }
}))

export function HeaderPage(props) {
  const { children, header } = props;
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Paper className={classes.paper}>
        {header}
      </Paper>
      {children}
    </div>
  );
}