import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid
} from '@material-ui/core';
import { api } from 'api/api';

import { updateStateObjectByKey } from 'utilities/StateHelpers';

const useStyles = makeStyles(theme => ({
  inputGrid: {
    marginBottom: theme.spacing(2),
  }
}));

export function AddProjectDialog(props) {
  const classes = useStyles();
  const { open, setOpen } = props;
  const [loading, setLoading] = React.useState(false);

  const [projectInfo, setProjectInfo] = React.useState({});
  const updateProjectInfo = (key, value) => updateStateObjectByKey(key, value, setProjectInfo);

  const handleSubmit = () => {
    setLoading(true);
    api.post('projects', projectInfo).then((response) => {
      if (response.ok) {
        setOpen(false);
      }
      setLoading(false);
    });
  }


  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Create new Project</DialogTitle>
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
        <Button onClick={() => setOpen(false)} color="primary">
          Cancel
        </Button>
        <Button disabled={loading} onClick={() => handleSubmit()} variant='contained' color="secondary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}