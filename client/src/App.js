import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexNavbar from './components/navbar/Navbar';
import LoginScreen from './pages/login/Login';
import RegisterScreen from './pages/register/Register'
import {BrowserRouter as Router,
        Switch, Route} from 'react-router-dom'
import LandingPage from './pages/landing/Landing';
class App extends React.Component {
  state = {
    username: null,
    formInput: 'ex. Tarik1234'
  };

  componentDidMount() {
    this.getUsername()
      .then(res => { this.setState({ username: res[0].username }) })
      .catch(err => { console.log(err) });
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
         <IndexNavbar></IndexNavbar>
        <Switch>
          <Route path = "/home" component = {LandingPage} />
          <Route path = "/login" component = {LoginScreen} />
          <Route path = "/register" component = {RegisterScreen} />
          <Route path = "*" component = {LandingPage}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;