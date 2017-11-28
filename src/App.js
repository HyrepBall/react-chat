import React, { Component } from 'react'; 
import { FlatButton, AppBar, TextField } 
from 'material-ui';

import {green100, green500, green700, 
blue500, blue600 } 
from 
'material-ui/styles/colors';

import './App.css';

var styles = {
  appBarStyle: {
    backgroundColor: blue600,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      authForm: {
        login: '',
	pswd: '',
      }
    }
  }

  render() {
    return (
      <div className="App">
	<AppBar
	  title="Chat dashboard"
	  titleStyle={{fontSize:15,}}
	  style={styles.appBarStyle}
	  iconElementRight={
	  <FlatButton 
	    label="Log in"
	    style={{fontSize:15,}}
	  />}
	/>
	<div>
	  <TextField
	    underlineFocusStyle={{
	      borderColor: blue500,
	    }}
	    hintText='Логин' />
	  <TextField 
	    underlineFocusStyle={{
	      borderColor: blue500,
	    }}
	    hintText='Пароль' />
	</div>
      </div>
    );
  }
}

export default App;
