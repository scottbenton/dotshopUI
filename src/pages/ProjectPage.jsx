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

const useStyles = makeStyles(theme => ({
  leftAlignText: {
    textAlign: 'left'
  },
  centeredDivider: {
    marginRight: 'auto',
    marginLeft: 'auto',
  }
}))

export function ProjectPage(props) {
  const classes = useStyles();
  const queryParams = useQuery();
  let projectID = queryParams.get('show');

  const [project, setProject] = React.useState();

  useEffect(() => {
    if (projectID) {
      api.get('projects/' + projectID).then(response => {
        if (response.ok) {
          setProject(response.data.data);
        }
        else {
          setProject({});
        }
      })
    }
  }, [projectID]);

  return (
    <>
      {typeof project === 'object' ?
        <FullPage>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h4'>
                {project.name || 'No show here'}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider variant='middle' />
            </Grid>

            <Grid item xs={12} md={7}>
              <Movements project={project} />
            </Grid>

            <Grid item xs={12} md={1}>
              <Divider orientation='vertical' className={classes.centeredDivider} />
            </Grid>

            <Grid item xs={12} md={4}>
              <AboutProject project={project} />
            </Grid>
          </Grid>
        </FullPage>
        :
        <LoadingIcon />
      }
    </>
  )
}