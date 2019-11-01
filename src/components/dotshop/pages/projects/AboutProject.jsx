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
  }
}));

export function AboutProject(props) {
  const { project } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom>
            Show Details
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6' className={classes.leftAlignText}>
            About the Show
          </Typography>
          <Divider className={classes.centeredDivider} />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.leftAlignText}>
            {project.description || ''}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}