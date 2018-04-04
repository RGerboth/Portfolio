//firebase.js
//
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0bjkmaqQSioVtkIt_DVttHPUifW3GLfU",
    authDomain: "portfolio-59361.firebaseapp.com",
    databaseURL: "https://portfolio-59361.firebaseio.com",
    projectId: "portfolio-59361",
    storageBucket: "portfolio-59361.appspot.com",
    messagingSenderId: "583277208062"
  };

firebase.initializeApp(config);

export default firebase 
