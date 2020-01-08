import React, { useEffect, useState } from 'react'
import './order-total.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons'
import {Button, Badge} from 'reactstrap'
import store from "../../../redux/store/index"
import { addItemToCart, removeItemFromCart } from "../../../redux/actions/index"

import { useDispatch, useSelector } from "react-redux"; 
function OrderTotal(){
    let priceTotal = 0
    const [orderModel, setOrderModel] = useState({
        username : "",
        telephone: "",
        content: [],
        date : "",
        discount: 0,
        price: 0,
        delivery: false,
        cashier: "",
        driver: "",
        paid : false,
        serial_no: 0
    })
    function getColor(cat){
        switch(cat){
            case "sweets":
                return 'info'
            case "doner":
                return 'warning'
            case "hamburger":
                return 'warning'
            case "pizza":
                return 'danger'
            case "sandwich": 
                return 'danger'
        }
        return "secondary"
    }
    const orderList = useSelector(state => state.orderCart)
    const dispatch = useDispatch()
    const orderItems = orderList.map((itemModel) => 
    <>  
        <Button color={getColor(itemModel.category)} className="order-item"
        onClick={()=>{dispatch(removeItemFromCart(itemModel))}}> {itemModel.name}
        <FontAwesomeIcon className="remove-icon" icon={faTrash}></FontAwesomeIcon></Button><br></br>
    </>
    )

    return (
        <>
        <div className="container">
            <h4>Your cart: </h4>

            <div className="order-list">
                {orderItems}
            </div>
                    <Button color="danger" size="lg" className="buy-icon">
                    <FontAwesomeIcon icon={faShoppingCart}/> {orderList.length} Items
                    </Button>
        </div>
        </>
    )
}

export default OrderTotal;