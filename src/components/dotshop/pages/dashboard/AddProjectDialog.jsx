import React from 'react';
import { api } from 'api/api';

import { updateStateObjectByKey } from 'utilities/StateHelpers';
import { ProjectDialog } from 'components/dotshop/shared/projects/ProjectDialog';

export function AddProjectDialog(props) {
  const { open, setOpen, callback } = props;
  const [loading, setLoading] = React.useState(false);

  const [projectInfo, setProjectInfo] = React.useState({});
  const updateProjectInfo = (key, value) => updateStateObjectByKey(key, value, setProjectInfo);

  const handleSubmit = () => {
    setLoading(true);
    api.post('projects', projectInfo).then((response) => {
      if (response.ok) {
        setOpen(false);
        callback();
      }
      setLoading(false);
    });
  }

  const actions = [
    { label: 'Cancel', onClick: () => setOpen(false) },
    { label: 'Create', onClick: () => handleSubmit(), color: 'secondary' }
  ];

  return (
    <ProjectDialog
      title='Create Project'
      projectInfo={projectInfo}
      updateProjectInfo={updateProjectInfo}
      open={open}
      setOpen={setOpen}
      loading={loading}
      actions={actions}
    />
  )
}