import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class Login extends Component {


constructor(props){
  super(props);
  this.state={
      username: '',
      password: '',
  }
  this.handleSubmit = this.handleSubmit.bind(this);
}

async handleSubmit(event) {
  event.preventDefault();

  const user = { "userName": this.state.username, "password": this.state.password }
  var that = this;
  await fetch('https://localhost:5001/Logon/userlogon', {
    method: 'POST',
     mode: "cors",
     cache: "no-cache",
     headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Request-Method': 'POST', 
      'Access-Control-Request-Headers': 'Content-Type, Authorization',
      'Origin': 'http://localhost:3000',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    body: JSON.stringify(user)
   })
   .then(response => response.json())
   .then(function(data){
       if ( data.isSuccessfull ) { 
           alert('data ' + data.isSuccessfull + " " + window.location.href )
           that.props.history.push('/main?authenticated')
       }
       else {
           window.location.reload(); 
       }
   })
   .catch(function(error){
            alert('Authorization failed : ' + error.message)
            window.location.reload(); 
         }
   );

}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title="Login"/>

           <form onSubmit={this.handleSubmit}>
               <TextField hintText="Enter your Username" floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})} />
               <br/>
               <TextField type="password"  hintText="Enter your Password" floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})} />
             <br/>
             <button>Login</button>
             </form>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;
