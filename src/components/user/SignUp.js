import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignupAction } from '../../Action_creators/authAction';


class SignUp extends Component{

  state={
    username:'',
    email:'',
    password:''
  }

  handleInput=(event)=>{
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  handleRegister =(e)=>{
    e.preventDefault();
    // get our form data out of state
    const { username, email, password } = this.state;
    this.props.SignupAction({ username, email, password });
  }
  
    render(){
      const {username, email, password} = this.state
        return(
    <div className="row signup">
    <form className="col s12" onSubmit={this.handleRegister}>
    <h3>Register</h3>
        <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">account_circle</i>
          <input id="username" type="text" name="username" value={username} className="validate" onChange={this.handleInput}/>
          <label for="username">Username</label>
        </div>
        </div>
        <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">drafts</i>
          <input id="email" type="email" className="validate" name="email" value={email} onChange={this.handleInput}/>
          <label for="email">Email</label>
        </div>
        </div>
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">lock</i>
          <input id="password" type="password" className="validate" name="password" value={password} onChange={this.handleInput}/>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
      <button type="submit" className="waves-effect waves-light btn  blue" style={{paddingBottom:0}}><i className="material-icons right">send</i>SIGNUP</button>
      </div>

      
    </form>
  </div>
        
        );
    }
}
export default connect(null, {SignupAction})(SignUp);
