import React, { useState, useCallback } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container, Row, Card } from 'reactstrap';
import './register.css'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

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
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/FrenchFries.jpg") + ")", backgroundSize: "cover"}}>
                <div className="filter" />
            <Container style={{backgroundColor:"rgba(0,0,0,0)"}}>
                <Row>
                    <Col lg={8} md={6} sm={12} >
                    <Card>          
                        <Form >
                            <FormGroup className="form-group">
                                <Label for="username" className="form-label">Nummy</Label>
                                <Input onChange={handleInputField} type="text" name="username" placeholder="Username" className="form-input"/>
                                <Input onChange={handleInputField} type="text" name="email" placeholder="E-mail" className="form-input"/>
                                <Input onChange={handleInputField} type="text" name="telephone" placeholder="Telephone" className="form-input"/>
                                <Input onChange={handleInputField} type="text" name="address" placeholder="Address" className="form-input"/>
                                <Input onChange={handleInputField} type="password" name="password" placeholder="Password" className="form-input"/>
                                <Input onChange={handleInputField} type="password" name="passwordRepeat" placeholder="Repeat password" className="form-input"/>
                                <Button className="btn-round" onClick={register}color="warning" style={{marginTop: "10px", width:"50%"}} type="button" >
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>
                    </Card>
                    </Col>
                </Row>
            </Container>
          {finished ?
          (<Redirect to = '/login'/>) : (console.log(""))}
        </div>
        </>
    )
}

export default RegisterScreen;