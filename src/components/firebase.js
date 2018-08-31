//Plant Parenthood
import firebase from 'firebase';

// Initialize Firebase

var config = {
  apiKey: "AIzaSyBrhN_deowk4HNJ4vadtAIoP_gCn0ws2vw",
  authDomain: "plant-parenthood-3950f.firebaseapp.com",
  databaseURL: "https://plant-parenthood-3950f.firebaseio.com",
  projectId: "plant-parenthood-3950f",
  storageBucket: "plant-parenthood-3950f.appspot.com",
  messagingSenderId: "931072517292"
};
firebase.initializeApp(config);

// // Create a root reference
// const storageService = firebase.storage();
// //Specific database and root file location where things get uploaded.
// const storageRef = storageService.ref();

// this exports the CONFIGURED version of firebase
export default firebase;
