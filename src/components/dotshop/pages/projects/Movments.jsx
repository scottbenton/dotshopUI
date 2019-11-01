import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'relative'
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
}))

export function Movements(props) {
  const { project } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom>
            Movements
          </Typography>
        </Grid>
      </Grid>
      <Fab color='secondary' aria-label='add-movment' className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  )
}