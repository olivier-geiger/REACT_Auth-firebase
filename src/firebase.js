import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCqn28M96e-OQI7PamfGTzkgDGGkj1GA7Y',
  authDomain: 'auth-react-9b4d2.firebaseapp.com',
  projectId: 'auth-react-9b4d2',
  storageBucket: 'auth-react-9b4d2.appspot.com',
  messagingSenderId: '1019342148625',
  appId: '1:1019342148625:web:d0f60c353fa685c5cecdb0',
  measurementId: 'G-93DRE42WYS',
});

export const auth = app.auth();
export default app;
