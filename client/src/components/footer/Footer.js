
import React from "react";
import '../../components/footer/footer.css'

import { Container, Row, Col } from "reactstrap";

function Footer(){
    return(
        <>
        <div className="footer-container">
            <Container>
                <Row>
                <Col lg={4} md={4} sm={12} xs={12} className="info-col">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, amor omnia vincit. Lorem ipsum dolor sit amet, amor omnia vincit</p>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className="info-col">
                <h3>Find Us</h3>
                <p>We're currently operating only in Sarajevo, BiH. Samo 387 71000 brate moj !!!</p>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className="info-col">
                <h3>Contact Us</h3>
                <p>Telephone: +387 53 53 53</p>
                </Col></Row>
            </Container>
        </div>
        </>
    )
}


export default Footer;