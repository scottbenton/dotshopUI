import AuthContext, { useAuth } from './FirebaseContext';
import AuthInstance from './firebase';
import { useCurrentUser, useIsTokenLoaded } from './FirebaseUser';

export default AuthInstance;
export { AuthContext, useCurrentUser, useIsTokenLoaded, useAuth };