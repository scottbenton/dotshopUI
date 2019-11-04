import React from 'react';
import { api } from 'api/api';

import { ProjectDialog } from 'components/dotshop/shared/projects/ProjectDialog';

export function EditProjectDialog(props) {
  const { open, setOpen, callback, projectInfo, updateProjectInfo } = props;
  const [loading, setLoading] = React.useState(false);

  const handleUpdate = () => {
    setLoading(true);
    api.put('projects/' + projectInfo.id, projectInfo).then((response) => {
      if (response.ok) {
        setOpen(false);
        callback();
      }
      setLoading(false);
    });
  }

  const actions = [
    { label: 'Cancel', onClick: () => setOpen(false) },
    { label: 'Update', onClick: () => handleUpdate(), color: 'secondary' }
  ];

  return (
    <ProjectDialog
      title='Update Project'
      projectInfo={projectInfo}
      updateProjectInfo={updateProjectInfo}
      open={open}
      setOpen={setOpen}
      loading={loading}
      actions={actions}
    />
  )
}