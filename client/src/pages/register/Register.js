import React, { useState, useCallback } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container, Row, Card ,InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import './register.css'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function RegisterScreen() {
    const [formData, setFormData] = useState({
        username: "Username",
        email: "E-mail",
        telephone: "+387 ",
        address: "Address, City, Postal Code",
        password: "Password",
        type: 1
    });
    let formValid = false;
    let emailValid, usernameValid, passwordValid, phoneValid, addressValid;
    const [finished, setFinished] = useState(false);
    const handleInputField = useCallback(event => {
      setFormData({...formData, [event.target.name] : event.target.value})
      validateForm()
      console.log(formData)
    })
    const register = async () => {
      let model = {
        username : formData.username,
        order_history: [],
        balance: 0.0,
        email: formData.email,
        type: formData.type,
        telephone: formData.telephone,
        address: formData.address,
        password: formData.password
      }
      await axios.post('/registration', model)
      .then(res => {
        setFinished(true);
      })
      .catch(error => {
        alert("An error occured!")
      })
      .finally(
      )
    }
    function validateForm(){
      if(formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && formData.email != 'Your email'){
        emailValid = true;
      } else emailValid = false;
      if(formData.password.length > 6 && formData.password != 'Your password'){
        passwordValid = true;
      } else passwordValid = false;
      if(formData.username.length  > 6 && formData.username != 'Your username'){
        usernameValid = true;
      } else usernameValid = false;
      if(formData.telephone.length  >= 9 && formData.telephone != 'Your telephone'){
        phoneValid = true;
      } else phoneValid = false;
      if(formData.address.length  > 7 && formData.address != 'Your address'){
        addressValid = true;
      } else addressValid = false;
      if(emailValid && passwordValid && usernameValid && phoneValid && addressValid){
        formValid = true;
      } else formValid = false;
    }
    return (
        <>
        <div
        className="page-header section-dark"
        style={{backgroundColor: 'orange'}}>
                <div className="container-main">
                  <Container style={{height: '100%'}}>
                    <Row>
                      <Col  lg={6} md={6} sm={0}></Col>
                      <Col lg={6} md={6} sm={12} className="registration">
                      <Form >
                            <FormGroup className="form-group">
                              <Label for="username" className="label"> Username </Label>
                              <InputGroup className="form-input">
                                <Input  onChange={handleInputField} type="text" name="username" placeholder="Your username" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="email" className="label"> E-mail </Label>
                              <InputGroup className="form-input">
                                <Input  onChange={handleInputField} type="text" name="email" placeholder="Your email" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="telephone" className="label"> Telephone </Label>
                              <InputGroup className="form-input">
                                <Input onChange={handleInputField} type="text" name="telephone" placeholder="Your telephone" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="address" className="label"> Address </Label>
                              <InputGroup className="form-input">
                                <Input  onChange={handleInputField} type="text" name="address" placeholder="Your address"/>
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="password" className="label"> Password </Label>
                              <InputGroup className="form-input">
                                <Input  onChange={handleInputField} type="password" name="password" placeholder="Your password" className="form-input"/>
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="select" className="label"> Account Type </Label>
                              <Input onChange={handleInputField} type="select" name="type" id="exampleSelect" className="form-input">
                                <option value="1">Customer</option>
                                <option value="2">Employee</option>
                                <option value="3">Manager</option>
                              </Input>
                                <Button className="btn-round" onClick={register}color="warning" style={{marginTop: "10px", width:"50%"}} type="button" >
                                    Register
                                </Button> <br></br>
                                <Link to="/login" className="login-txt">Have an account? Login here</Link>
                            </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </Container>
                </div>
          {finished ?
          (<Redirect to = '/login'/>) : (console.log(""))}
        </div>
        </>
    )
}

export default RegisterScreen;