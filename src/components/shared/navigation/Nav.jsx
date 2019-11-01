import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavBar } from './NavBar';
import { NavPage } from './NavPage';
import { useCurrentUser } from 'api/auth';
import { CircularProgress } from '@material-ui/core';
import { useIsTokenLoaded } from 'api/auth/FirebaseUser';

const useStyles = makeStyles(theme => ({
  progress: {
    position: 'absolute',
    top: '50%',
    right: '50%'
  }
}))

export function Nav(props) {
  const classes = useStyles();
  const { children, ...otherProps } = props;

  const user = useCurrentUser();
  const tokenLoaded = useIsTokenLoaded();

  const loading = (typeof user === 'undefined' || (user && !tokenLoaded));
  return (
    <>
      {!loading ?
        <>
          <NavBar {...otherProps} />
          <NavPage>
            {children}
          </NavPage>
        </>
        :
        <CircularProgress className={classes.progress} />
      }
    </>
  );
}