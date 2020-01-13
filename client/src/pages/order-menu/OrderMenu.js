import './order-menu.css'
import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import OrderSidebar from '../../components/order/order-sidebar/OrderSidebar';
import OrderMenuComponent from '../../components/order/order-menu/OrderMenu';
import OrderTotal from '../../components/order/order-total/OrderTotal';
import IndexNavbar from '../../components/navbar/Navbar';

function OrderMenu() {
    return (
        <>
            {/*<div className="view-holder">
            <div className="order-sidebar">
            <OrderSidebar></OrderSidebar>
            </div>
            <div className="order-picker-holder">
            <OrderMenuComponent></OrderMenuComponent>
            </div>
            <div className="order-total-holder">
            <OrderTotal></OrderTotal>
            </div>
        </div>*/}
            <div className="view-holder">
            <IndexNavbar></IndexNavbar>
                <Container style={{width:"100vw"}}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Card className="static-card">
                                <OrderSidebar></OrderSidebar>
                            </Card>
                        </Col></Row>
                    <Row>
                        <Col lg={9} md={9} sm={9}>
                            <Card  className="static-card">
                                <OrderMenuComponent></OrderMenuComponent>
                            </Card>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <Card  className="static-card">
                                <OrderTotal></OrderTotal>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default OrderMenu;