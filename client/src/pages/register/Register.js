import React, { useState, useCallback } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container, Row, Card ,InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import './register.css'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function RegisterScreen() {
    const [formData, setFormData] = useState({
        username: "Username",
        email: "E-mail",
        telephone: "+387 ",
        address: "Address, City, Postal Code",
        password: "Password",
        password_repeat: "Repeat password"
    });
    const [finished, setFinished] = useState(false);
    const handleInputField = useCallback(event => {
      setFormData({...formData, [event.target.name] : event.target.value})
    }, [])
    const register = async () => {
      let model = {
        username : formData.username,
        order_history: [],
        balance: 0.0,
        email: formData.email,
        telephone: formData.telephone,
        address: formData.address,
        password: formData.password
      }
      await axios.post('visitor/register', model)
      .then(res => {
        setFinished(true);
      })
      .catch(error => {
        alert("An error occured!")
      })
      .finally(
      )
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
                                <Input  onChange={handleInputField} type="text" name="username" placeholder="ex. Johnny122" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="email" className="label"> E-mail </Label>
                              <InputGroup className="form-input">
                                <Input  onChange={handleInputField} type="text" name="email" placeholder="ex. johhny@mymail.net" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="telephone" className="label"> Telephone </Label>
                              <InputGroup className="form-input">
                                <Input onChange={handleInputField} type="text" name="telephone" placeholder="ex. +387 63 222 333" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="address" className="label"> Address </Label>
                              <InputGroup className="form-input">
                                <Input  onChange={handleInputField} type="text" name="address" placeholder="ex. Titova 21"/>
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <Label for="password" className="label"> Password </Label>
                              <InputGroup className="form-input">
                                <Input  onChange={handleInputField} type="password" name="password" placeholder="Make it count" className="form-input"/>
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><FontAwesomeIcon icon={faCheckCircle}/></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                                <Button className="btn-round" onClick={register}color="warning" style={{marginTop: "10px", width:"50%"}} type="button" >
                                    Register
                                </Button>
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