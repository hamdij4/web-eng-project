
import React from "react";

import { Container, Row, Col } from "reactstrap";

function Footer(){
    return(
        <>
        <div className="footer-container">
            <Container>
                <Row>
                <Col>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, amor omnia vincit. Lorem ipsum dolor sit amet, amor omnia vincit</p>
                </Col>
                <Col>
                <h3>Find Us</h3>
                <p>We're currently operating only in Sarajevo, BiH. Samo 387 71000 brate moj !!!</p>
                </Col>
                <Col>
                <h3>Contact Us</h3>
                <p>Telephone: +387 53 53 53</p>
                </Col></Row>
            </Container>
        </div>
        </>
    )
}


export default Footer;