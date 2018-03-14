import React, { Component } from 'react';

class SignUp extends Component{
  
    render(){
        return(
    <div class="row signup">
    <form class="col s12">
    <h3>Register</h3>
        <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">account_circle</i>
          <input id="email" type="text" class="validate"/>
          <label for="email">Username</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">drafts</i>
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
        </div>
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">lock</i>
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
      <a type="submit" class="waves-effect waves-light btn  blue" style={{paddingBottom:0}}><i class="material-icons right">send</i>SIGNUP</a>
      </div>

      
    </form>
  </div>
        
        );
    }
}
export default SignUp;
