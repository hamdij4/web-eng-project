
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from 'react-bootstrap/Image';
import Woki from '../assets/img/Woki.jpg';
import Amerikanac from '../assets/img/Amerikanac.jpg'
import IChicken from '../assets/img/IChicken.jpg'
import Montana from '../assets/img/Montana.jpg'
import Klopa from '../assets/img/Klopa.jpg'
import Zeljo from '../assets/img/Zeljo.jpg'

const componentStyle = {
    maxHeight: "max-content",
    minHeight: "max-content",
    backgroundColor: "orange",
    width: "100vw",
    padding: "50px"
};
const colStyle = {
    width: "max-content"
}
const imageStyle = {
    height: "auto",
    maxHeight: "300px",
    minHeight: "300px",
    width: "auto",
    maxWidth: "500px",
    minWidth: "500px"
}
const images ={
    Woki : `url(${Woki})`,
    Amerikanac : `url(${Amerikanac})`,
    Klopa : `url(${Klopa})`,
    Zeljo : `url(${Zeljo})`,
    IChicken : `url(${IChicken})`,
    Montana : `url(${Montana})`
}
function LandingGallery() {
    return (
        <>
            <div className="gallery-container" style={componentStyle}>
                    <h2 style={{marginBottom : "30px"}}>Our partners</h2>
                <Container style={{marginLeft : "10vw"}}>
                    <Row style={colStyle}>
                        <Col lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Woki, backgroundSize : "cover", height: "35vh", minWidth: "25vw"}}>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Amerikanac, backgroundSize : "cover", height: "35vh", minWidth: "25vw"}}>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Montana, backgroundSize : "cover", height: "35vh", minWidth: "25vw"}}>
                        </Col>
                    </Row>
                    <Row style={colStyle}>
                        <Col lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.IChicken, backgroundSize : "cover", height: "35vh", minWidth: "25vw"}}>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Zeljo, backgroundSize : "cover", height: "35vh", minWidth: "25vw"}}>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Klopa, backgroundSize : "cover", height: "35vh", minWidth: "25vw"}}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LandingGallery;