import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';

export const Nav =()=>(
<div>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo mylogo"/>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="badges.html">Components</a></li>
      </ul>
    </div>
  </nav>
  </div>
);

class Landing extends Component{
    render(){
        return(

            <div className="background">
            Yummy Recipes
            <div className="row">
            <div className='col s6 m6 offset-m3'>
            <ul class="tabs">
                <li class="tab col s6"><a class="active" href="#test-swipe-2">Login</a></li>                
                <li class="tab col s6"><a href="#test-swipe-1">SignUp</a></li>
                                                
            </ul>
            <div id="test-swipe-1" class="col s6"><SignUp/></div>
            <div id="test-swipe-2" class="col s6"><Login/></div>
            </div>
            </div>
            </div>
        );
    }
}
export default Landing;