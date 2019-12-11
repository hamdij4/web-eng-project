
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Badge} from 'reactstrap';
import Image from 'react-bootstrap/Image'

const componentStyle = {
    maxHeight : "130vh",
    minHeight : "900px",
    backgroundColor : "rgba(255, 167, 59, 1)",
    width : "100vw",
    padding: "50px"
};

const cardStyle = {
    height: "50%",
    minHeight: "50%",
    width: "auto",
    minWidth: "50%"
}
function LandingReviews(){

    return (
            <>
            <div className="landing-review-container" style={componentStyle}>
                <h2 style={{marginBottom: "75px"}}>What they say about us</h2>
                <Container>
                    <Row >
                        <Col xs={12} sm = {12} lg={4} md={4}><Card style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../../assets/img/DefaultProfile1.jpg")} alt="..."  />
                            <CardTitle>
<Badge color="warning" pill>Ed Sheeran</Badge>{" "}
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Customer Service done right!</h5></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}><Card style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../../assets/img/DefaultProfile2.jpg")} alt="..."  />
                            <CardTitle>
<Badge color="warning" pill>Ed Sheeran</Badge>{" "}
                            </CardTitle>
                            <CardBody>
                                <CardText><h5>Customer Service done right!</h5></CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col xs={12} sm = {12} lg={4} md={4}><Card style={cardStyle, {marginBottom: "30px"}}>
                            <CardImg top src={require("../../assets/img/DefaultProfile1.jpg")} alt="..."  />
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