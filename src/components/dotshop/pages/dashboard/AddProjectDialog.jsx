import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField
} from '@material-ui/core';
import { api } from 'api/api';

import { updateStateObjectByKey } from 'utilities/StateHelpers';

export function AddProjectDialog(props) {
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
        <TextField
          label='Project Name'
          value={projectInfo.name}
          onChange={(evt) => updateProjectInfo('name', evt.target.value)}
          fullWidth
        />
        Hi im the placeholder for the content
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