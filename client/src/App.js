import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexNavbar from './components/navbar/Navbar';
import LoginScreen from './pages/login/Login';
import RegisterScreen from './pages/register/Register'
import {BrowserRouter as Router,
        Switch, Route} from 'react-router-dom'
import LandingPage from './pages/landing/Landing';
import OrderMenu from './pages/order-menu/OrderMenu';


class App extends React.Component {
  state = {
    navbarHidden : false
  };
  render() {
    return (
      <div className="App">
     
      <Router>
        <Switch>
          <Route path = "/home" component = {LandingPage}/>
          <Route path = "/login" component = {LoginScreen} />
          <Route path = "/register" component = {RegisterScreen} />
          <Route path = "/order" component = {OrderMenu}/>
          <Route path = "*" component = {LandingPage}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;