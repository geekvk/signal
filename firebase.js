import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCXgPCTMxYuaMEndLNPMvjS-67AD9zOWoE",
    authDomain: "signal-clone-45a24.firebaseapp.com",
    projectId: "signal-clone-45a24",
    storageBucket: "signal-clone-45a24.appspot.com",
    messagingSenderId: "787361803994",
    appId: "1:787361803994:web:51fec2f26b3d6e3166ffe3"
  };
  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
