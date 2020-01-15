import React, { useState, useCallback } from "react";
import { Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody, Col, Container, Row, Card, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import './register.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
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
  const errors = {
    username: 'Your username must be longer than 6 characters',
    password: 'Your password must be longer than 7 characters',
    email: 'Please enter a valid e-mail address',
    telephone: 'Your telephone must be longer than 8 characters',
    address: 'Your address must be longer than 7 characters'
  }
  let formValid = false;
  let emailValid, usernameValid, passwordValid, phoneValid, addressValid;
  const [finished, setFinished] = useState(false);
  const handleInputField = useCallback(event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    validateForm()
  })
  const register = async () => {
    let formValid = false;
    let model = {
      username: formData.username,
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
  function validateForm() {
    if (formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && formData.email != 'Your email') {
      emailValid = true;
    } else emailValid = false;
    if (formData.password.length > 6 && formData.password != 'Your password') {
      passwordValid = true;
    } else passwordValid = false;
    if (formData.username.length > 6 && formData.username != 'Your username') {
      usernameValid = true;
    } else usernameValid = false;
    if (formData.telephone.length >= 9 && formData.telephone != 'Your telephone') {
      phoneValid = true;
    } else phoneValid = false;
    if (formData.address.length > 7 && formData.address != 'Your address') {
      addressValid = true;
    } else addressValid = false;
    if (emailValid && passwordValid && usernameValid && phoneValid && addressValid) {
      formValid = true;
    } else formValid = false;
  }
  let openEmailValidator = false;
  function getValidator(inputField) {
    const validEmailRegex =
      RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    switch (inputField) {
      case 'username':
        if (formData.username.length < 6) {
          formValid = false;
          return 'red'
        } else {
          formValid = true;
          return 'white'
        }
        break;
      case 'password':
        if (formData.password.length < 7) {
          formValid = false;
          return 'red'
        } else {
          formValid = true;
          return 'white'
        }
        break;
      case 'email':
        if (!validEmailRegex.test(formData.email)) {
          formValid = false;
          openEmailValidator = false;
          return 'red'
        } else {
          formValid = true;
          openEmailValidator= false;
          return 'white'
        }
        break;
      case 'address':
        if (formData.address.length < 7) {
          formValid = false;
          return 'red'
        } else {
          formValid = true;
          return 'white'
        }
        break;
      case 'telephone':
        if (formData.telephone.length < 9) {
          formValid = false;
          return 'red'
        } else {
          formValid = true;
          return 'white'
        }
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div
        className="page-header section-dark"
        style={{ backgroundColor: 'orange' }}>
        <div className="container-main">
          <Container style={{ height: '100%' }}>
            <Row>
              <Col lg={6} md={6} sm={0}></Col>
              <Col lg={6} md={6} sm={12} className="registration">
                <Form >
                  <FormGroup className="form-group">
                    <Label for="username" className="label"> Username </Label>
                    <InputGroup className="form-input">
                      <Input onChange={handleInputField} type="text" name="username" placeholder="Your username" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText id="validatorIcon1"><FontAwesomeIcon icon={faCheckCircle} style={{ color: getValidator('username') }} />
                        </InputGroupText>
                        <Popover placement="bottom" isOpen={getValidator('username') == 'red'} target="validatorIcon1" toggle={true}>
                          <PopoverBody>
                            {errors.username}
                          </PopoverBody>
                        </Popover>
                      </InputGroupAddon>
                    </InputGroup>
                    <Label for="email" className="label"> E-mail </Label>
                    <InputGroup className="form-input">
                      <Input onChange={handleInputField} type="text" name="email" placeholder="YourEmail@mailer.com" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText id="validatorIcon2"><FontAwesomeIcon icon={faCheckCircle} style={{ color: getValidator('email') }} /></InputGroupText>
                        <Popover placement="bottom" isOpen={openEmailValidator} target="validatorIcon2" toggle={true}>
                          <PopoverBody>
                            {errors.username}
                          </PopoverBody>
                        </Popover>
                      </InputGroupAddon>
                    </InputGroup>
                    <Label for="telephone" className="label"> Telephone </Label>
                    <InputGroup className="form-input">
                      <Input onChange={handleInputField} type="text" name="telephone" placeholder="Your telephone" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText id="validatorIcon3"><FontAwesomeIcon icon={faCheckCircle} style={{ color: getValidator('telephone') }} /></InputGroupText>
                        <Popover placement="bottom" isOpen={false} target="validatorIcon3" toggle={true}>
                          <PopoverBody>
                            {errors.username}
                          </PopoverBody>
                        </Popover>
                      </InputGroupAddon>
                    </InputGroup>
                    <Label for="address" className="label"> Address </Label>
                    <InputGroup className="form-input">
                      <Input onChange={handleInputField} type="text" name="address" placeholder="Your address" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText id="validatorIcon4"><FontAwesomeIcon icon={faCheckCircle} style={{ color: getValidator('address') }} /></InputGroupText>
                        <Popover placement="bottom" isOpen={getValidator('address') == 'red'} target="validatorIcon4" toggle={true}>
                          <PopoverBody>
                            {errors.username}
                          </PopoverBody>
                        </Popover>
                      </InputGroupAddon>
                    </InputGroup>
                    <Label for="password" className="label"> Password </Label>
                    <InputGroup className="form-input">
                      <Input onChange={handleInputField} type="password" name="password" placeholder="Your password" className="form-input" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText id="validatorIcon5"><FontAwesomeIcon icon={faCheckCircle} style={{ color: getValidator('password') }} /></InputGroupText>
                        <Popover placement="bottom" isOpen={getValidator('password') == 'red'} target="validatorIcon5" toggle={true}>
                          <PopoverBody>
                            {errors.username}
                          </PopoverBody>
                        </Popover>
                      </InputGroupAddon>
                    </InputGroup>
                    <Label for="select" className="label"> Account Type </Label>
                    <Input onChange={handleInputField} type="select" name="type" id="exampleSelect" className="form-input">
                      <option value="1">Customer</option>
                      <option value="2">Employee</option>
                      <option value="3">Manager</option>
                    </Input>
                    <Button className="btn-round" onClick={register} color="warning" style={{ marginTop: "10px", width: "50%" }} type="button" >
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
          (<Redirect to='/login' />) : (console.log(""))}
      </div>
    </>
  )
}

export default RegisterScreen;