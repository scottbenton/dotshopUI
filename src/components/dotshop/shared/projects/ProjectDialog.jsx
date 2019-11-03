import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  DialogActions,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  inputGrid: {
    marginBottom: theme.spacing(2),
  }
}));

export function ProjectDialog(props) {
  const classes = useStyles();
  const {
    open,
    setOpen,
    title,
    projectInfo,
    updateProjectInfo,
    loading,
    actions
  } = props;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12} className={classes.inputGrid}>
            <TextField
              label='Project Name'
              variant='filled'
              value={projectInfo.name || ''}
              onChange={(evt) => updateProjectInfo('name', evt.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className={classes.inputGrid}>
            <TextField
              label='Project Description'
              variant='filled'
              value={projectInfo.description || ''}
              onChange={(evt) => updateProjectInfo('description', evt.target.value)}
              fullWidth
              multiline
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        {actions.map(action => (
          <Button key={action.label} disabled={loading} onClick={action.onClick} color={action.color || 'primary'}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  )
}