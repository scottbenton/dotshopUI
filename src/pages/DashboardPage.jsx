import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Typography,
  Zoom,
  Grid,
  Card,
  CardContent,
  CardActionArea
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { HeaderPage } from 'components/shared/HeaderPage';

import { Redirect } from 'react-router-dom';

import { api } from 'api/api';
import { useCurrentUser } from 'api/auth';

import { AddProjectDialog } from 'components/dotshop/pages/dashboard/AddProjectDialog';
import { ROUTES } from 'constants/routes';
import { OpenButton } from 'components/shared/OpenButton';
import { makeQueryParams } from 'utilities/RouteHelpers';
import { LoadingIcon } from 'components/shared/LoadingIcon';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  card: {
    textAlign: 'left',
    height: '100%'
  },
  topCard: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 200,
  }
}))

export function DashboardPage(props) {
  const classes = useStyles();
  const user = useCurrentUser();
  const theme = useTheme();

  const [shows, setShows] = React.useState();
  const [openShow, setOpenShow] = React.useState();

  const getShows = React.useCallback(() => {
    api.get('projects').then(response => {
      if (response.ok) {
        setShows(response.data);
      } else {
        setShows([]);
      }
    })
  }, []);

  useEffect(() => {
    if (user) {
      getShows();
    }
  }, [getShows, user]);

  return (
    <>
      {openShow &&
        <Redirect to={{
          pathname: ROUTES.PROJECT,
          search: makeQueryParams([{ key: 'show', value: openShow }]),
        }}
        />
      }
      <HeaderPage header={
        <Typography variant='h4'>
          Your Shows
        </Typography>
      }>
        <Grid container spacing={3}>
          {Array.isArray(shows) ? shows.map((show, index) => (
            <Grid item xs={12} sm={6} key={show.name + index}>
              <Card elevation={3} className={classes.card}>
                <CardActionArea className={classes.card} onClick={() => setOpenShow(show.id)}>
                  <CardContent className={classes.topCard}>
                    <Typography variant='h5'>
                      {show.name}
                    </Typography>
                  </CardContent>
                  {show.description &&
                    <CardContent>
                      <Typography color='textSecondary'>
                        {show.description}
                      </Typography>
                    </CardContent>
                  }
                </CardActionArea>
              </Card>
            </Grid>
          )) : <LoadingIcon />}
        </Grid>
      </HeaderPage>
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