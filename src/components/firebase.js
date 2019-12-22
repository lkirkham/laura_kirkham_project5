//Plant Parenthood
// firebase.js

import firebase from 'firebase';

const API_KEY = `${process.env.REACT_APP_FIREBASE_API_KEY}`;

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
  apiKey: API_KEY,
  authDomain: "plant-parenthood-3950f.firebaseapp.com",
  databaseURL: "https://plant-parenthood-3950f.firebaseio.com",
  projectId: "plant-parenthood-3950f",
  storageBucket: "plant-parenthood-3950f.appspot.com",
  messagingSenderId: "931072517292"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;