import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button
} from '@material-ui/core';

import { FullPage } from 'components/shared/FullPage';
import { PAGES } from 'constants/Pages';
import { useCurrentUser } from 'api/auth/FirebaseUser';
import { useAuth } from 'api/auth/FirebaseContext';

import UndrawHeader from 'resources/images/undraw_dotshop.png';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  header: {
    textDecoration: 'none',
    fontFamily: 'comfortaa',
  },
  image: {
    width: '80%',
    maxWidth: 500
  }
}));

export function LandingPage(props) {
  const auth = useAuth();
  const user = useCurrentUser();
  const classes = useStyles();

  const handleLogout = () => {
    auth.doSignOut();
  }

  return (
    <FullPage>
      <Typography variant='h3' component='h1' className={classes.header}>
        Welcome to
      </Typography>
      <Typography variant='h2' component='h1' className={classes.header} gutterBottom>
        dotshop
      </Typography>
      <img src={UndrawHeader} alt='UndrawHeader' className={classes.image} />
      <Typography variant='h5' component='h2' color='textSecondary' gutterBottom>
        A drill writing web application for Marching Band Show designers.
      </Typography>
      {user ?
        <>
          <Button variant='outlined' color='primary' onClick={handleLogout} className={classes.button}>
            Logout
          </Button>
          <Button variant='contained' color='primary' component={PAGES.DASHBOARD.link} className={classes.button}>
            {PAGES.DASHBOARD.title}
          </Button>
        </>
        :
        <>
          <Button variant='outlined' color='primary' component={PAGES.SIGN_UP.link} className={classes.button} >
            {PAGES.SIGN_UP.title}
          </Button>

          <Button variant='contained' color='primary' component={PAGES.LOGIN.link} className={classes.button}>
            {PAGES.LOGIN.title}
          </Button>
        </>
      }
    </FullPage>
  );
}