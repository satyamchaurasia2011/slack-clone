import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBvbXfnZMArSbWxKFkSedp7oxCDP7N4Wu0",
    authDomain: "slack-clone-6026e.firebaseapp.com",
    projectId: "slack-clone-6026e",
    storageBucket: "slack-clone-6026e.appspot.com",
    messagingSenderId: "1043759261337",
    appId: "1:1043759261337:web:4824a6fe64830d6b59fa08"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };