
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import '../../components/landing-food-menu/landing-food-menu.css' ;

function LandingMenu() {
    return (
        <>
            <div className="menu-holder">
                <h3 style={{
                    marginBottom: "40px",
                    fontWeight: "600"
                }}>Today's hot offers</h3>
                <Container>
                    <Row >
                        <Col xs={12} sm = {12} lg={4} md={4}>
                            <Card className = "food-menu-card">
                            <CardImg top src={require("../../assets/img/Hamburger.jpg")} alt="..." />
                            <Badge color="danger" pill className="price-tag">$4.99</Badge>
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}>
                            <Card className = "food-menu-card">
                            <CardImg top src={require("../../assets/img/Hamburger.jpg")} alt="..." />
                            <Badge color="danger" pill className="price-tag">$4.99</Badge>
                            <CardTitle>
                                Hamburger S
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}>
                            <Card  className = "food-menu-card">
                            <CardImg top src={require("../../assets/img/Hamburger.jpg")} alt="..." />
                            <Badge color="danger" pill className="price-tag">$4.99</Badge>
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
                        <Col xs={12} sm = {12} lg={4} md={4}>
                            <Card className = "food-menu-card">
                            <CardImg top src={require("../../assets/img/Doner.jpg")} alt="..." />
                            <Badge color="danger" pill className="price-tag">9.50 KM</Badge>
                            <CardTitle>
                                Doner Large
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Sauce, Salad, Fried Doner Meat</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}>
                            <Card className = "food-menu-card">
                            <CardImg top src={require("../../assets/img/Doner.jpg")} alt="..." />
                            <Badge color="danger" pill className="price-tag">7 KM</Badge>
                            <CardTitle>
                                Doner Medium
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Ingredients: </h5><br></br>
                                <h6>Tomatoes, Sauce, Salad, Fried Doner Meat</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}>
                            <Card className = "food-menu-card">
                            <CardImg top src={require("../../assets/img/Doner.jpg")} alt="..." />
                            <Badge color="danger" pill className="price-tag">$6.50</Badge>
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