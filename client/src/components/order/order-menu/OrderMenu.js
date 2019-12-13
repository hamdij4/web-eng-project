import './order-menu.css'
import React from "react";
import classnames from "classnames";
import { Container, Col, Row } from 'reactstrap'
import { Card, CardImg, CardBody, CardTitle, CardText, Badge, CardImgOverlay } from 'reactstrap';

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function OrderMenuComponent() {
    return (
        <>
            <div className="holder">
                <div className="title">
                    <h2>
                        Hamburgers
                    </h2>
                </div>
                <Container className="card-container">
                    <Row>
                        <Col lg={4} md={4} sm={4} className="food-col">
                            <Card className="food-card">
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
                        <Col lg={4} md={4} sm={4} className="food-col">
                            <Card className="food-card">
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
                        <Col lg={4} md={4} sm={4} className="food-col">
                            <Card className="food-card">
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
                        <Col lg={4} md={4} sm={4} className="food-col">
                            <Card className="food-card">
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
                        <Col lg={4} md={4} sm={4} className="food-col">
                            <Card className="food-card">
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
                        <Col lg={4} md={4} sm={4} className="food-col">
                            <Card className="food-card">
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
                <div className="pagination">
                    <nav aria-label="Page navigation example">
                        <Pagination>
                            <PaginationItem className="disabled">
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    Previous
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="active">
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    1
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    2
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    3
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    Next
            </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default OrderMenuComponent;