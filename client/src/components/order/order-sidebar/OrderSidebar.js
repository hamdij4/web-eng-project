import React from "react";
import './order-sidebar.css'
import {Nav, NavItem, NavLink, Button} from 'reactstrap'

function OrderSidebar (){
    return (
        <>
        <div className="sidebar">
            {/*<div className="sidebar-title" style={{textAlign:"center", marginBottom:"20px"}}>
            <h3>Pick your food</h3>
            </div>*/}
            <div className="sidebar-button">
            <Button color="warning" size="lg" className="button">Hamburgers</Button>
            <Button color="warning" size="lg" className="button">Pizza</Button>
            <Button color="warning" size="lg" className="button">Doner</Button>
            <Button color="info" size="lg" className="button">Pancakes</Button>
            <Button color="primary" size="lg" className="button">Cakes</Button>
            </div>
        </div>

        </>
    )
}

export default OrderSidebar;