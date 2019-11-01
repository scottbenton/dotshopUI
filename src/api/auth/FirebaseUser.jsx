import React from 'react';
import { useAuth } from 'api/auth/FirebaseContext';
import { api } from 'api/api';

export function useCurrentUser() {
  const firebase = useAuth();
  const [user, setUser] = React.useState();

  firebase.auth.onAuthStateChanged(async authUser => {
    setUser(authUser || null);
  });

  return user;
}

export function useIsTokenLoaded() {
  const firebase = useAuth();
  const [tokenLoaded, setTokenLoaded] = React.useState(false);

  firebase.auth.onAuthStateChanged(async authUser => {
    if (authUser) {
      await authUser.getIdToken(true).then((token) => {
        api.setHeader('token', token);
        setTokenLoaded(true);
      });
    }
    else {
      api.setHeader('token', null);
      setTokenLoaded(false);
    }
  })
  return tokenLoaded;
}