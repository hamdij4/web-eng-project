
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const componentStyle = {
    maxHeight : "130vh",
    minHeight : "900px",
    backgroundColor : "rgba(255, 213, 97, 1)",
    width : "100vw",
    padding: "50px"
};

function LandingMenu() {
    return (
        <>
            <div className="menu-holder" style ={componentStyle}>
                <h3 style={{
                    marginBottom: "40px",
                    fontWeight: "600"
                }}>Today's hot offers</h3>
                <Container>
                    <Row>
                        <Col xs={4}><Card style={{ width: '20rem' }}>
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
                        <Col xs={4}><Card style={{ width: '20rem' }}>
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
                        <Col xs={4}><Card style={{ width: '20rem' }}>
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
                        <Col xs={4}><Card style={{ width: '20rem' }}>
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
                        <Col xs={4}><Card style={{ width: '20rem' }}>
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
                        <Col xs={4}><Card style={{ width: '20rem' }}>
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