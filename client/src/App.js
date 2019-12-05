import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Badge } from 'reactstrap';
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

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
        <header className="App-header">
          <Badge color="success" pill>{this.state.username}</Badge>{" "}
          <form>
            <FormGroup>
              <Label for="username">Get user</Label>
              <Input type="text" name="username" placeholder="" value={this.state.formInput}
              onChange={this.updateField.bind(this)}/>
              <Button className="btn-round" color="primary" style={{margin: "10px"}} type="button" onClick={this.handleForm}>
                Search
</Button>
            </FormGroup>
          </form>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;