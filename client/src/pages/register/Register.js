import React, { useState, useCallback } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
    })
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
                <div className="form-container" style={{zIndex : "100"}}>
                <Form >
            <FormGroup>
              <Label for="username" className="form-label">Nummy</Label>
              <Input onChange={handleInputField} type="text" name="username" placeholder="Username" className="form-input"
              />
              <Input onChange={handleInputField} type="text" name="email" placeholder="E-mail" className="form-input"
              />
              <Input onChange={handleInputField} type="text" name="telephone" placeholder="Telephone" className="form-input"
              />
              <Input onChange={handleInputField} type="text" name="address" placeholder="Address" className="form-input"
              />
              <Input onChange={handleInputField} type="password" name="password" placeholder="Password" className="form-input"
              />
              <Input onChange={handleInputField} type="password" name="passwordRepeat" placeholder="Repeat password" className="form-input"
              />
              <Button className="btn-round" onClick={register}color="warning" style={{marginTop: "10px", width:"100%"}} type="button" >
                Register
        </Button>
            </FormGroup>
          </Form>
          {finished ?
          (<Redirect to = '/login'/>) : (console.log(""))}
          </div>
        </div>
        </>
    )
}

export default RegisterScreen;