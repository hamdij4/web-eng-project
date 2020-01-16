
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import '../../components/landing-user-reviews/landing-user-reviews.css'
import Image from 'react-bootstrap/Image'


function LandingReviews() {

    return (
        <>
            <div className="review-container">
                <h2 style={{ marginBottom: "75px" }}>What they say about us</h2>
                <Container>
                    <Row >
                        <Col xs={12} sm={12} lg={4} md={4} style={{ marginBottom: "15px" }}>
                            <Card className="review-card">
                                <CardImg top src={require("../../assets/img/DefaultProfile1.jpg")} alt="..." />
                                <CardTitle>
                                    <Badge color="warning" pill>Ed Sheeran</Badge>{" "}
                                </CardTitle>
                                <CardBody>
                                    <CardText><h5>Customer Service done right!</h5></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} lg={4} md={4} style={{ marginBottom: "15px" }}>
                            <Card className="review-card" >
                                <CardImg top src={require("../../assets/img/DefaultProfile2.jpg")} alt="..." />
                                <CardTitle>
                                    <Badge color="warning" pill>Ed Sheeran</Badge>{" "}
                                </CardTitle>
                                <CardBody>
                                    <CardText><h5>Customer Service done right!</h5></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} lg={4} md={4} style={{ marginBottom: "15px" }}>
                            <Card className="review-card">
                                <CardImg top src={require("../../assets/img/DefaultProfile1.jpg")} alt="..." />
                                <CardTitle>
                                    <Badge color="warning" pill>Ed Sheeran</Badge>{" "}
                                </CardTitle>
                                <CardBody>
                                    <CardText><h5>Customer Service done right!</h5></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LandingReviews;