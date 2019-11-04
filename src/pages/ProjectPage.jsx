import React, { useEffect } from 'react';
import {
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'utilities/RouteHelpers';
import { FullPage } from 'components/shared/FullPage';
import { api } from 'api/api';
import { LoadingIcon } from 'components/shared/LoadingIcon';

import { AboutProject } from 'components/dotshop/pages/projects/AboutProject';
import { Movements } from 'components/dotshop/pages/projects/Movments';
import { updateStateObjectByKey } from 'utilities/StateHelpers';

const useStyles = makeStyles(theme => ({
  leftAlignText: {
    textAlign: 'left'
  },
  centeredDivider: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  header: {
    textDecoration: 'none',
    fontFamily: 'comfortaa',
  }
}))

export function ProjectPage(props) {
  const classes = useStyles();
  const queryParams = useQuery();
  let projectID = queryParams.get('show');

  const [project, setProject] = React.useState();
  const updateProject = (key, value) => updateStateObjectByKey(key, value, setProject);

  useEffect(() => {
    if (projectID && typeof project !== 'object') {
      api.get('projects/' + projectID).then(response => {
        if (response.ok) {
          setProject(response.data);
        }
        else {
          setProject({});
        }
      })
    }
  }, [projectID, project]);

  return (
    <>
      {typeof project === 'object' ?
        <FullPage>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h4' component='h1' className={classes.header}>
                {project.name || 'No show here'}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider variant='middle' />
            </Grid>

            <Grid item xs={12} md={7}>
              <Movements project={project} updateProject={updateProject} />
            </Grid>

            <Grid item xs={12} md={1}>
              <Divider orientation='vertical' className={classes.centeredDivider} />
            </Grid>

            <Grid item xs={12} md={4}>
              <AboutProject project={project} setProject={setProject} updateProject={updateProject} />
            </Grid>
          </Grid>
        </FullPage>
        :
        <LoadingIcon />
      }
    </>
  )
}