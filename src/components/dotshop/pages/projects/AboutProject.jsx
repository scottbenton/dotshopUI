import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    textAlign: 'left',
  },
  header: {
    textDecoration: 'none',
    fontFamily: 'comfortaa',
  },
  description: {
    whiteSpace: 'pre-wrap'
  }
}));

export function AboutProject(props) {
  const { project } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h2' gutterBottom className={classes.header}>
            Show Details
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6' component='h3' className={classes.leftAlignText}>
            About the Show
          </Typography>
          <Divider className={classes.centeredDivider} />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.description}>
            {project.description || ''}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}