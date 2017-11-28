import React from 'react';
import ReactDOM from 'react-dom';
 import MuiThemeProvider from 
 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


 const RenderApp = () => (
  <MuiThemeProvider>
   <App />
 </MuiThemeProvider>
 );

ReactDOM.render(<RenderApp/>, 
document.getElementById('root')); 
registerServiceWorker();

