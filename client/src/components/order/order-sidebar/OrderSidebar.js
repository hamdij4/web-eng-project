import React from "react";
import './order-sidebar.css'
import {Nav, NavItem, NavLink, Button} from 'reactstrap'
import { useDispatch } from 'react-redux'
import {changeOrderType} from '../../../redux/actions/index'

function OrderSidebar (){
    const dispatch = useDispatch()
    return (
        <>
        <div className="sidebar">
            {/*<div className="sidebar-title" style={{textAlign:"center", marginBottom:"20px"}}>
            <h3>Pick your food</h3>
            </div>*/}
            <div className="sidebar-button">
            <Button color="warning" size="lg" className="button"
            onClick={()=> {
                dispatch(changeOrderType('hamburger'))
            }}>Hamburgers</Button>
            <Button color="danger" size="lg" className="button"
            onClick={()=> {
                dispatch(changeOrderType('pizza'))
            }}>Pizza</Button>
            <Button color="warning" size="lg" className="button"
            onClick={()=> {
                dispatch(changeOrderType('doner'))
            }}>Doner</Button>
            <Button color="danger" size="lg" className="button"
            onClick={()=> {
                dispatch(changeOrderType('sandwich'))
            }}>Sandwich</Button>
            <Button color="primary" size="lg" className="button"
            onClick={()=> {
                dispatch(changeOrderType('sweets'))
            }}>Sweets</Button>
            </div>
        </div>

        </>
    )
}

export default OrderSidebar;