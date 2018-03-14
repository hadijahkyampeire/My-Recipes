import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing , {Nav}from './components/user/Landing';
import Dashboard from './components/categories/dashboard';
import './App.css';
import './index.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
