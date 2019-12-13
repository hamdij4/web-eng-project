import './order-menu.css'
import React from "react";
import classnames from "classnames";
import {Container, Col, Row} from 'reactstrap'
import { Card, CardImg, CardBody, CardTitle, CardText, Badge,CardImgOverlay} from 'reactstrap';

function OrderMenuComponent() {
    return (
        <>
            <div className="holder">
                <div className="title">
                    <h2>
                        Hamburgers
                    </h2>
                </div>
                <Container>
                    <Row>
                        <Col className="food-col">
                            <Card className = "food-card">
                            <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col className="food-col">
                            <Card className = "food-card">
                            <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col className="food-col">
                            <Card className = "food-card">
                            <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="food-col">
                            <Card className = "food-card">
                            <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col className="food-col">
                            <Card className = "food-card">
                            <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col className="food-col">
                            <Card className = "food-card">
                            <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
                            <CardTitle>
                                Hamburger XL
                            </CardTitle>
                            <CardBody>
                                <CardText>
                                <h6>Tomatoes, Cheese, Salad, Ground Beef</h6></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default OrderMenuComponent;