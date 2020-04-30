import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH1QqlNzWS1Et5m8HCjs3tLn1XYfNp_4Y",
  authDomain: "foody-d0a4c.firebaseapp.com",
  databaseURL: "https://foody-d0a4c.firebaseio.com",
  projectId: "foody-d0a4c",
  storageBucket: "foody-d0a4c.appspot.com",
  messagingSenderId: "243603588172",
  appId: "1:243603588172:web:e7a9800ba0f1eb73f2a0e9",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
