import React from 'react';
import ReactDOM from 'react-dom';
 import MuiThemeProvider from 
 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
  apiKey: "AIzaSyA7tNfVhU5WZar_JJcXehejttGx_77aR-A",
  authDomain:"react-chatt.firebaseapp.com",
  databaseURL: "https://react-chatt.firebaseio.com",
  projectId: "react-chatt",
  storageBucket:"react-chatt.appspot.com",
  messagingSenderId: "645278689514"
};
firebase.initializeApp(config);


 const RenderApp = () => (
  <MuiThemeProvider>
   <App />
 </MuiThemeProvider>
 );

ReactDOM.render(<RenderApp/>, 
document.getElementById('root')); 
registerServiceWorker();

