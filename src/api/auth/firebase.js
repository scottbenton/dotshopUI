import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBY5FGQcRYRoyBsa8IAiYbCV-vUa-0Tcus",
  authDomain: "field-set-54072.firebaseapp.com",
  databaseURL: "https://field-set-54072.firebaseio.com",
  projectId: "field-set-54072",
  storageBucket: "field-set-54072.appspot.com",
  messagingSenderId: "975529024357",
  appId: "1:975529024357:web:204c9ba126cd3580f39f8c",
  measurementId: "G-2VQTMP7DKB"
}

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // AUTHENTICATION API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doUpdateProfile = async profileInfo => {
    await this.auth.currentUser.updateProfile(profileInfo);
    await this.auth.currentUser.reload();
  }

  doGetCurrentUser = () =>
    this.auth.currentUser;

  doGetCurrentUserUID = () =>
    this.auth.currentUser ? this.auth.currentUser.uid : null;

}

export default Firebase;