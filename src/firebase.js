import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7tNfVhU5WZar_JJcXehejttGx_77aR-A",
    authDomain: "react-chatt.firebaseapp.com",
    databaseURL: "https://react-chatt.firebaseio.com",
    projectId: "react-chatt",
    storageBucket: "react-chatt.appspot.com",
    messagingSenderId: "645278689514"
  };
  var fire = firebase.initializeApp(config);

export default fire; 
