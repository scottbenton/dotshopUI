import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Divider,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { EditProjectDialog } from './EditProjectDialog';
import { OpenButton } from 'components/shared/OpenButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    textAlign: 'left',
  },
  header: {
    textDecoration: 'none',
    fontFamily: 'comfortaa',
  },
  description: {
    whiteSpace: 'pre-wrap'
  },
  iconButton: {
    marginTop: -12,
  }
}));

export function AboutProject(props) {
  const { project, setProject, updateProject, projectID, } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant='h5' component='h2' className={classes.header}>
            Show Details
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <OpenButton component={<IconButton className={classes.iconButton}>
            <EditIcon />
          </IconButton>
          }>
            <EditProjectDialog
              projectInfo={project}
              updateProjectInfo={updateProject}
              projectID={projectID}
              callback={() => setProject()}
            />
          </OpenButton>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6' component='h3' className={classes.leftAlignText}>
            About the Show
          </Typography>
          <Divider className={classes.centeredDivider} />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.description}>
            {project.description || ''}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}