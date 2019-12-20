import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexNavbar from './components/navbar/Navbar';
import LoginScreen from './pages/login/Login';
import RegisterScreen from './pages/register/Register'
import {BrowserRouter as Router,
        Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landing/Landing';
import { createBrowserHistory } from "history"
import OrderMenu from './pages/order-menu/OrderMenu';


const history = createBrowserHistory();

class App extends React.Component {
  state = {
    username: null,
    formInput: 'ex. Tarik1234'
  };

  componentDidMount() {
  }

  getUsername = async () => {
    const response = await fetch('customer/user/hamdija1234');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  handleForm(event){
    event.preventDefault()
  }
  updateField(event){
    this.setState({formInput : event.target.value}, () => console.log(this.state.formInput))
  }
  render() {
    return (
      <div className="App">
        <Router>
         {(window.location.pathname != "/login" || window.location.pathname != "/register") ?
         (
          <IndexNavbar></IndexNavbar>)
        :( console.log(history.location.pathname)
        )}
        <Switch>
          <Route path = "/home" component = {LandingPage} />
          <Route path = "/login" component = {LoginScreen} />
          <Route path = "/register" component = {RegisterScreen}/>
          <Route path = "/order" component = {OrderMenu}/>
          <Route path = "*" component = {LandingPage}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;