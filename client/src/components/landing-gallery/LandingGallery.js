
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


function LandingGallery() {
    return (
        <>
            <div className="gallery-container">
                    <h2 style={{marginBottom : "30px"}}>Our partners</h2>
                <Container style={{margin: 'none'}}>
                    <Row className="row-gallery">
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Woki}}>
                            <div className="overlay">
                                <h2 style={{margin: "0px", padding: "20px"}}>Woki</h2>
                                <h6>Sarajevo, Titova</h6>
                                <p>Experience orientalism properly</p>
                            </div>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Amerikanac}}>
                            <div className="overlay">
                                <h2 style={{margin: "0px", padding: "20px"}}>Amerikanac</h2>
                                <h6>Sarajevo, McDonalds alley</h6>
                                <p>Yeee haw cowboy</p>
                            </div>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Montana}}>
                            <div className="overlay">
                                <h2 style={{margin: "0px", padding: "20px"}}>Montana</h2>
                                <h6>Sarajevo, SCC</h6>
                                <p>Experience cekanje od 30 minuta</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row-gallery">
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.IChicken}}>
                            <div className="overlay">
                                <h2 style={{margin: "0px", padding: "20px"}}>iChicken</h2>
                                <h6>Sarajevo, Grbavica</h6>
                                <p>Piletine iz nosa</p>
                            </div>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Zeljo}}>
                            <div className="overlay">
                                <h2 style={{margin: "0px", padding: "20px"}}>Zeljo</h2>
                                <h6>Sarajevo, Bascarsija</h6>
                                <p>Overrated AF </p>/p>
                            </div>
                        </Col>
                        <Col className="image"lg={4} md={4} sm={12} xs={12} style={{backgroundImage : images.Klopa}}>
                            <div className="overlay">
                                <h2 style={{margin: "0px", padding: "20px"}}>Klopa</h2>
                                <h6>Sarajevo, Titova</h6>
                                <p>Was never there -lul</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

const images ={
    Woki : `url(${Woki})`,
    Amerikanac : `url(${Amerikanac})`,
    Klopa : `url(${Klopa})`,
    Zeljo : `url(${Zeljo})`,
    IChicken : `url(${IChicken})`,
    Montana : `url(${Montana})`
}

export default LandingGallery;