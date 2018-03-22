import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Notifications from 'react-notify-toast';
import { Provider } from 'react-redux';
import Landing , {Nav}from './components/user/Landing';
import Dashboard from './components/categories/dashboard';
import store from './Reducers/index';
import Login from './components/user/Login'
import './App.css';
import './index.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Notifications/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
