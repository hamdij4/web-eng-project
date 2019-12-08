
import React from "react";
import { Container, Row, Col} from "reactstrap";
import Image from 'react-bootstrap/Image';

const componentStyle = {
    maxHeight : "max-content",
    minHeight : "max-content",
    width : "100vw",
    padding: "50px"
};
const containerStyle = {
    width: "100vw",
    maxHeight : "max-content",
    minHeight : "max-content"
}
function LandingGallery() {
    return (
        <>
        <div className ="gallery-container" style={componentStyle}>
            <Container style={containerStyle}>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Image object src={require("../assets/img/BalkanExpress.jpg")} alt="Balkan Express, Titova iza McDonald's restorana"  fluid />
                    </Col><Col lg={4} md={4} sm={12} xs={12}>
                    <Image src={require("../assets/img/BalkanExpress.jpg")} alt="Balkan Express, Titova iza McDonald's restorana"  fluid />
                    </Col><Col lg={4} md={4} sm={12} xs={12}>
                    <Image src={require("../assets/img/BalkanExpress.jpg")} alt="Balkan Express, Titova iza McDonald's restorana"  fluid />
                    </Col>
                </Row><Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Image src={require("../assets/img/BalkanExpress.jpg")} alt="Balkan Express, Titova iza McDonald's restorana"  fluid />
                    </Col><Col lg={4} md={4} sm={12} xs={12}>
                    <Image src={require("../assets/img/BalkanExpress.jpg")} alt="Balkan Express, Titova iza McDonald's restorana"  fluid />
                    </Col><Col lg={4} md={4} sm={12} xs={12}>
                    <Image src={require("../assets/img/BalkanExpress.jpg")} alt="Balkan Express, Titova iza McDonald's restorana"  fluid />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default LandingGallery;