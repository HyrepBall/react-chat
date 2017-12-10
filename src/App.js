import React, { Component } from 'react'; 
import { FlatButton, AppBar, TextField, 
Dialog, Tabs, Tab } 
from 'material-ui';
import firebase from 'firebase';
import 'firebase/firestore';
import { blue300, blue500, blue700 } from 
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
      authTabsVal: 'login',
      authDialogOpen: false,
      authCheck: false,
    }
  }

  componentWillMount() {
    const fire = firebase.auth();

  }

  componentDidMount() {
   const fire = firebase.auth();

   if (fire.currentUser) {
    alert(fire.currentUser.email)
   } else {
    alert('Авторизуйтесь')

   }

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


  handleAuthLogin() {
   const email = this.state.authForm.login,
        pswd = this.state.authForm.pswd,
	fire = firebase.auth();


fire.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() =>  {

    alert('Login request');
    fire.signInWithEmailAndPassword(email, pswd)

    this.setState({
     authCheck: true,
     authDialogOpen: false,
    });

  })
  .catch(error => {
   alert(error.message)
  });



  }

 handleSignOut() {
  firebase.auth().signOut().then(function() {
    alert('SignOut success')
  });

 this.setState({
  authCheck: !this.state.authCheck,
 });

 }



  handleAuthSubmit(e) {

  const email = this.state.authForm.login,
        pswd = this.state.authForm.pswd;

firebase.auth().createUserWithEmailAndPassword(email, pswd).catch(function(err) {
    alert(err.message)
   });
  }

  showAuthForm() {
   return (
    <TextField
     style={styles.inputStyle}
     hintText='Логин'
    />
   )
  }

  handleAuthDialogOpen = () =>  {
    this.setState({
      authDialogOpen: !this.state.authDialogOpen
     }) 
  }

  handleLoginWrite(e) {
    this.setState({
     authForm: {
      login: e.target.value,
      pswd: this.state.authForm.pswd,
     },
    });
  }

  handlePswdWrite(e) {
    this.setState({
     authForm: {
      login: this.state.authForm.login,
      pswd: e.target.value,
     },
    });
  }

  handleAuthTabsChange(val) {
   this.setState({
    authTabsVal: val,
   });
  }



  render() {

  const dialogLoginBtn = [
    <FlatButton
      label='Войти'
      onClick={
       () => this.handleAuthLogin()}
      style={styles.primaryStyle}
    />
  ];
  const dialogRegBtn = [
    <FlatButton
     label='Зарегистрироваться'
     onClick={
      () => this.handleAuthSubmit()
     }
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
	    this.state.authCheck ?
	     <FlatButton
	      label='Выход'
	      style={{ fontSize: 15, }}
	      onClick={
	       () => this.handleSignOut()
	      }
	     />
	    :
	  <FlatButton 
	    label="Войти"
	    style={{fontSize:15,}}
	    onClick={() =>this.handleAuthDialogOpen()}
	  />}
	/>


        <br/>
	<p>
	 Current user: <br/> 
	</p>


	<Dialog
	  title={false}
	  actions={
	    dialogLoginBtn
	  }
	  modal={false}
	  open={this.state.authDialogOpen}
	  onRequestClose={
	   this.handleAuthDialogOpen
	  }
	  bodyStyle={{
	    //height: '40vh',
	    minHeight: '50vh',
	    padding: '0',
	  }}
	  contentStyle={{
	    width: '94%',
	    maxWidth: 'none',
	  }}
	>
          <Tabs 
	   value={this.state.authTabsVal}
	   onChange={
	    val => this.handleAuthTabsChange(val) }
	   inkBarStyle={{ 
	    backgroundColor: '#fff',
	    minHeight: '6px'
	   }}
	   contentContainerStyle={{
	    padding: '15px'
	   }}
	  >
	    <Tab
	     value='login'
	     label='Вход'
	     buttonStyle={{
	      backgroundColor: blue500,
	     }}
	    >
	    <TextField
	      style={styles.inputStyle}
	      hintText='Email'
	      onChange={
	      e =>this.handleLoginWrite(e)}
	    />

	    <TextField
	      style={styles.inputStyle}
	      hintText='Пароль'
	      onChange={
	      e => this.handlePswdWrite(e)}
	    />
	   </Tab>

	   <Tab
	    value='reg'
	    label='Регистрация'
	    buttonStyle={{
	     backgroundColor: blue500
	    }}
	   >
	    sss
	   </Tab>

          </Tabs>


	</Dialog>



      </div>
    );
  }
}

export default App;
