import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAction } from '../../Action_creators/authAction';
import Signup from './SignUp';

class Login extends Component{

  state={
    email:'',
    password:''
  }

  handleInput=(event)=>{
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  handleLogin =(e)=>{
    e.preventDefault();
    // get our form data out of state
    const { email, password } = this.state;
      this.props.LoginAction({ email, password }, this.props.history);
      
  }
  
    render(){
      const {email, password} = this.state
        return(
    <div class="row signup">
    <form class="col s12" onSubmit={this.handleLogin}>
    <h4>Login Here</h4>
        <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">drafts</i>
          <input id="email" type="email" class="validate" name="email" value={email} onChange={this.handleInput}/>
          <label for="email">Email</label>
        </div>
        </div>
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">lock</i>
          <input id="password" type="password" class="validate" name="password" value={password} onChange={this.handleInput}/>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
      <button type="submit" class="waves-effect waves-light btn"><i class="material-icons right">send</i>LOGIN</button>
      </div>
    </form>
  </div>
        
        );
    }
}
export default connect(null, {LoginAction})(Login);