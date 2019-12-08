
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const componentStyle = {
    maxHeight : "max-content",
    minHeight : "max-content",
    backgroundColor : "rgba(255, 213, 97, 1)",
    width : "100vw",
    padding: "50px"
};
const cardStyle = {
    height: "100%",
    minHeight: "100%",
    width: "auto",
    minWidth: "100%"
}

function LandingMenu() {
    return (
        <>
            <div className="menu-holder" style ={componentStyle}>
                <h3 style={{
                    marginBottom: "40px",
                    fontWeight: "600"
                }}>Today's hot offers</h3>
                <Container>
                    <Row >
                        <Col xs={12} sm = {12} lg={4} md={4}><Card style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}><Card style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger S
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}><Card  style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger Kids
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "20px"}}>
                        <Col xs={12} sm = {12} lg={4} md={4}><Card  style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../assets/img/Doner.jpg")} alt="..." />
                            <CardTitle>
                                Doner Large
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Sauce, Salad, Fried Doner Meat</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}><Card  style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../assets/img/Doner.jpg")} alt="..." />
                            <CardTitle>
                                Doner Medium
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Sauce, Salad, Fried Doner Meat</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}><Card  style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../assets/img/Doner.jpg")} alt="..." />
                            <CardTitle>
                                Doner Kids
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Sauce, Salad, Fried Doner Meat</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    <h6 style={{color: "orange", float: "right", fontSize: "12px"}}>Show more</h6>
                </Container>
            </div>
        </>
            )
        }
        
        
export default LandingMenu;