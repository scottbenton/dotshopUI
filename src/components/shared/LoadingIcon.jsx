import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  circularProgress: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  progressHolder: {
    width: '100%',
  }
}))

export function LoadingIcon(props) {
  const classes = useStyles();

  return (
    <div className={classes.progressHolder}>
      <CircularProgress className={classes.circularProgress} />
    </div>
  )
}