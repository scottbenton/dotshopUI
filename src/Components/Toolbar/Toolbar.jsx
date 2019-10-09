import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  input: {
    border: 'none',
    fontSize: 24,
    paddingLeft: theme.spacing(1),
    padding: 2,
    width: '100%',
    '&:focus': {
      border: '1px outset' + theme.palette.primary.main,
      borderRadius: '5px',
    }
  }
}));

export default function MyToolbar(props) {
  const classes = useStyles();

  const { drillData, updateDrillData } = props;

  return (
    <div className={classes.root}>
      <Appbar position='static' color='secondary'>
        <Toolbar variant='dense'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <input value={drillData.projectName} onChange={(evt) => updateDrillData('projectName', evt.target.value)} className={classes.input} />
            </Grid>
            <Grid item xs={12}>
              Menu placeholder text
            </Grid>
          </Grid>
        </Toolbar>
      </Appbar>
    </div>
  );
}