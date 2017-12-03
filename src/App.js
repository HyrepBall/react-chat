import React, { Component } from 'react'; 
import { FlatButton, AppBar, TextField, 
Dialog } 
from 'material-ui';
import firebase from 'firebase';
import 'firebase/firestore';
import { blue500 } from 
'material-ui/styles/colors';

import './App.css';

const styles = {
  appBarStyle: {
    backgroundColor: blue500,
  },
  primaryStyle: {
    backgroundColor: blue500,
    color: '#fff',
  },
  dialogStyle: {
    height: '400px',
    maxHeight: 'none',
  },
  inputStyle: {
    width: '100%',
    maxWidth: '100%',
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
      },
      authDialogOpen: true,
    }
  }

  componentDidMount() {

   const auth = firebase.auth();

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


  handleAuthDialogOpen = () =>  {
    this.setState({
      authDialogOpen: !this.state.authDialogOpen
     })
    
  }



  render() {

  const actions = [
    <FlatButton
      label='Войти'
      onClick={this.handleAuthDialogOpen}
      style={styles.primaryStyle}
    />
  ];

    return (
      <div className="App">
	<AppBar
	  title="Чат"
	  titleStyle={{fontSize:15,}}
	  style={styles.appBarStyle}
	  iconElementRight={
	  <FlatButton 
	    label="Войти"
	    style={{fontSize:15,}}
	    onClick={this.handleAuthDialogOpen}
	  />}
	/>

	<Dialog
	  title='Вход на сайт'
	  actions={actions}
	  modal={false}
	  open={this.state.authDialogOpen}
	  onRequestClose={
	   this.handleAuthDialogOpen
	  }
	  bodyStyle={{
	    //height: '40vh',
	    minHeight: '30vh',
	  }}
	  contentStyle={{
	    width: '94%',
	    maxWidth: 'none',
	  }}
	>

	  <TextField
	    style={styles.inputStyle}
	    hintText='Email'
	  />

	  <TextField
	    style={styles.inputStyle}
	    hintText='Пароль'
	  />


	</Dialog>



      </div>
    );
  }
}

export default App;
