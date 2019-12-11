
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from 'react-bootstrap/Image';
import Woki from '../../assets/img/Woki.jpg';
import Amerikanac from '../../assets/img/Amerikanac.jpg'
import IChicken from '../../assets/img/IChicken.jpg'
import Montana from '../../assets/img/Montana.jpg'
import Klopa from '../../assets/img/Klopa.jpg'
import Zeljo from '../../assets/img/Zeljo.jpg'
import '../../components/landing-gallery/landing-gallery.css'

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
            <div className="gallery-container">
                    <h2 style={{marginBottom : "30px"}}>Our partners</h2>
                <Container style={{margin: 'none'}}>
                    <Row className="row-gallery">
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Woki}}>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Amerikanac}}>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Montana}}>
                        </Col>
                    </Row>
                    <Row className="row-gallery">
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.IChicken}}>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Zeljo}}>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Klopa}}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LandingGallery;