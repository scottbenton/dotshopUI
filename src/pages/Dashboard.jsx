import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Zoom,
  CircularProgress
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { FullPage } from 'components/shared/FullPage';
import { useTheme } from '@material-ui/styles';
import { api } from 'api/api';
import { useCurrentUser } from 'api/auth';
import { AddProjectDialog } from 'components/dotshop/pages/dashboard/AddProjectDialog';

import { OpenButton } from 'components/shared/OpenButton';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

export function DashboardPage(props) {
  const classes = useStyles();
  const user = useCurrentUser();
  const theme = useTheme();

  const [projects, setProjects] = React.useState();

  const getProjects = React.useCallback(() => {
    api.get('projects').then(response => {
      console.log(response);
      if (response.ok) {
        setProjects(response.data);
      } else {
        setProjects([]);
      }
    })
  }, []);

  useEffect(() => {
    if (user) {
      getProjects();
    }
  }, [getProjects, user]);

  return (
    <>
      <FullPage>
        <Typography variant='h4'>
          Dashboard
        </Typography>
        {Array.isArray(projects) ? projects.map((project, index) => (
          <Typography key={index}>
            {project.name}
          </Typography>
        )) : <CircularProgress />}
      </FullPage>
      <Zoom
        in={true}
        timeout={theme.transitions.duration.enteringScreen}
      >
        <OpenButton fab className={classes.fab} color='secondary' buttonContent={<AddIcon />}>
          <AddProjectDialog />
        </OpenButton>
      </Zoom>
    </>
  );
}