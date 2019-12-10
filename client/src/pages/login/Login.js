import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const formContainer = {
    backgroundColor: "rgba(245, 185, 66, 0.75)",
    height: "max-content",
    width: "max-content",
    borderRadius : "5px",
    padding: "30px"
}
const lableStyle = {
    color: "white",
    padding: "20px"
}
const fieldStyle = {
    marginBottom: "10px"
}
function LoginScreen() {
    return (
        <>
        <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/HamburgerLogin.jpg") + ")", backgroundSize: "cover"}}>
                <div className="filter"/>
                <div className="form-container" style={{zIndex: "100"}}>
                <Form style={formContainer}>
            <FormGroup>
              <Label for="username" style={lableStyle}>Nummy</Label>
              <Input type="text" name="username" placeholder="Username" style={fieldStyle}
              />
              <Input type="text" name="password" placeholder="Password" style={fieldStyle}
              />
              <Button className="btn-round" color="danger" style={{marginTop: "10px", width:"100%"}} type="button" >
                Login
        </Button>
            </FormGroup>
          </Form>
          </div>
        </div>
        </>
    )
}

export default LoginScreen;