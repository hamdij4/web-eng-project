import React, { useState, useCallback} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './login.css'
import Axios from "axios";
import {Redirect} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function LoginScreen() {

    const [loginInfo, setLoginInfo] = useState({
        username: "Username",
        password: "Password"
    })
    const [loggedIn, setLoggedIn] = useState(false);

    const login = async() => {
        await Axios.post('/authenticate', loginInfo)
        .then(res => {
            localStorage.setItem('token', res.data.jwt);
            localStorage.setItem('type', res.data.type)
            setLoggedIn(true);
        })

        .catch(error => {
            console.log(error)
        })
        .finally(
            //TODO
        )
    }
    const handleInputField = useCallback(event => {
        setLoginInfo({...loginInfo, [event.target.name] : event.target.value})
      })

    return (
        <>
        <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/HamburgerLogin.jpg") + ")", backgroundSize: "cover"}}>
                <Form className="form-container">
            <FormGroup>
              <Label for="username">
                  <FontAwesomeIcon  className="icon" icon={faUserCircle}/>
              </Label>
              <Input onChange={handleInputField} type="text" name="username" placeholder="Username" className="field"
              />
              <Input onChange={handleInputField} type="password" name="password" placeholder="Password" className="field"
              />
              <Button onClick={login} className="btn-round" color="warning" style={{marginTop: "10px", width:"100%"}} type="button" >
                Login
        </Button>
            </FormGroup>
          </Form>
          {
              loggedIn ?
              (<Redirect to='/home' />)
              : (console.log(""))
          }
        </div>
        </>
    )
}

export default LoginScreen;