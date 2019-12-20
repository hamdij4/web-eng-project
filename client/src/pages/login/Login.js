import React, { useState, useCallback} from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import './login.css'
import Axios from "axios";
import {Redirect} from 'react-router-dom'
function LoginScreen() {

    const [loginInfo, setLoginInfo] = useState({
        username: "Username",
        password: "Password"
    })
    const [loggedIn, setLoggedIn] = useState(false);

    const login = async() => {
        await Axios.post('visitor/login', loginInfo)
        .then(res => {
            localStorage.setItem('token', res.data.jwt);
            setLoggedIn(true);
        })

        .catch(error => {
            console.log("Error loging in")
        })
        .finally(
            console.log("to add tips")
        )
    }
    const handleInputField = useCallback(event => {
        setLoginInfo({...loginInfo, [event.target.name] : event.target.value})
        console.log(loginInfo)
      })
    return (
        <>
        <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/HamburgerLogin.jpg") + ")", backgroundSize: "cover"}}>
                <div className="filter"/>
                <div className="form-container" style={{zIndex: "100", backgroundColor: "none"}}>
                <Form className="login-form">
            <FormGroup>
              <Label for="username" className="label">Nummy</Label>
              <Input onChange={handleInputField} type="text" name="username" placeholder="Username" className="form-input"
              />
              <Input onChange={handleInputField} type="password" name="password" placeholder="Password" className="form-input"
              />
              <Button onClick={login} className="btn-round" color="warning" style={{marginTop: "10px", width:"100%"}} type="button" >
                Login
        </Button>
            </FormGroup>
          </Form>
          {
              loggedIn ?
              (
              <Redirect to='/home' />
              )
              : (console.log(""))
          }
          </div>
        </div>
        </>
    )
}

export default LoginScreen;