
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from 'react-bootstrap/Image'

const componentStyle = {
    maxHeight : "130vh",
    minHeight : "900px",
    backgroundColor : "rgba(255, 167, 59, 1)",
    width : "100vw",
    padding: "50px"
};

function LandingReviews(){

    return (
            <>
            <div className="landing-review-container" style={componentStyle}>
                <h2 style={{marginBottom: "75px"}}>What they say about us</h2>
                <Container>
                    <Row>
                        <Col sm={4} style={{backgroundColor: "rgba(200,200,200, 0.2)", borderRadius:"10px", margin: "10px", padding: "10px"}}>
                        <Image src={require("../assets/img/DefaultProfile1.jpg")} style={{height: "150px", width: "150px"}}roundedCircle /><br></br><br></br>
                        <h8 style={{margin: "40px"}}>Ivan Andersen</h8><br></br>
                        <h2 style={{fontSize: "22px"}}>What a wonderful world. Service is 10/10</h2> <br></br>
                        <h6 style={{fontSize:"12px", float : "right"}}> 12.05.2019.</h6>
                        </Col>
                        <Col sm={4}style={{backgroundColor: "rgba(200,200,200, 0.2)", borderRadius:"10px", margin: "10px", padding: "10px"}}>
                        <Image src={require("../assets/img/DefaultProfile2.jpg")} style={{height: "150px", width: "150px"}}roundedCircle /><br></br><br></br>
                        <h8 style={{margin: "40px"}}>Stefani Andersen</h8><br></br>
                        <h2 style={{fontSize: "22px"}}>A wonderful journey</h2> <br></br>
                        <h6 style={{fontSize:"12px", float : "right"}}> 11.02.2019.</h6>
                        </Col>
                        <Col style={{backgroundColor: "rgba(200,200,200, 0.2)", borderRadius:"10px", margin: "10px", padding: "10px"}}>
                        <Image src={require("../assets/img/DefaultProfile2.jpg")} style={{height: "150px", width: "150px"}}roundedCircle /><br></br><br></br>
                        <h8 style={{margin: "40px"}}>Toni Cetinski </h8><br></br>
                        <h2 style={{fontSize: "22px"}}>What a wonderful world. Service is 10/10</h2> <br></br>
                        <h6 style={{fontSize:"12px", float : "right"}}> 12.05.2019.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
    )
}

export default LandingReviews;