import React, { Component } from 'react'; 
import { FlatButton, AppBar, TextField } 
from 'material-ui';
import * as firebase from 'firebase';
import { blue500, blue600 } from 
'material-ui/styles/colors';

import './App.css';

var styles = {
  appBarStyle: {
    backgroundColor: blue500,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'Test Value',
      authForm: {
        login: 'login',
	pswd: 'pswd',
      }
    }
  }

  componentDidMount() {

    this.setState({
      test: 'Qwert'
    });

    const rootRef = 
firebase.database().ref().child('react-chatt');
    const testRef = rootRef.child('fire');
    testRef.on('value', snap => {
      this.setState({
         test: snap.val()
      });
    });
  }


  handleLoginChange (e) {
    this.setState({
      authForm: {
        login: e.target.value,
	pswd: this.state.authForm.pswd
      }
    })
  }

  handlePswdChange (e) {
    this.setState({
      authForm: {
        login: this.state.authForm.login,
	pswd: e.target.value
      }
    })
  }

  handleAuthSubmit(e) {
	return false
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
	<h2>{ this.state.test }</h2>
	<br/><br/>
	<code> 
	  {this.state.authForm.login}<br/>
	  {this.state.authForm.pswd}
	</code>
	<br/><br/>
	<form onSubmit={(e) => 
	  this.handleAuthSubmit(e)}
	>
	  <TextField
	    underlineFocusStyle={{
	      borderColor: blue500,
	    }}
	    name='login'
	    hintText='Логин'
	    onChange={(e) => 
	      this.handleLoginChange(e)
	    }
	  />
	  <TextField 
	    underlineFocusStyle={{
	      borderColor: blue500,
	    }}
	    name='pswd'
	    hintText='Пароль'
	    onChange={ (e) => 
	      this.handlePswdChange(e)
	    }
	   />
	</form>
      </div>
    );
  }
}

export default App;
