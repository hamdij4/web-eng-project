import './order-menu.css'
import React from "react";
import { Container, Row, Col } from "reactstrap";
import OrderSidebar from '../../components/order/order-sidebar/OrderSidebar';
import OrderMenuComponent from '../../components/order/order-menu/OrderMenu';

function OrderMenu(){
    return(
        <>
        <div className="view-holder">
            <div className="order-sidebar">
            <OrderSidebar></OrderSidebar>
            </div>
            <div className="order-picker-holder">
            <OrderMenuComponent></OrderMenuComponent>
            </div>
            <div className="order-total-holder">

            </div>
        </div>
        </>
    )
}

export default OrderMenu;