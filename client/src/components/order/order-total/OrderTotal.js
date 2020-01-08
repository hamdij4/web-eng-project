import React, { useEffect, useState } from 'react'
import './order-total.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons'
import {Button, Badge} from 'reactstrap'
import store from "../../../redux/store/index"
import { addItemToCart } from "../../../redux/actions/index"

import { useDispatch, useSelector } from "react-redux"; 
function OrderTotal(){


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
    //const [orderList, setOrderList] = useState([])
    const orderList = useSelector(state => state.orderCart)

    const orderItems = orderList.map((itemName) => 
    <>
    <Button color="info" className="order-item">{itemName}<FontAwesomeIcon className="remove-icon" icon={faTrash}></FontAwesomeIcon></Button>
    <br></br>
    </>
    )

    return (
        <>
        <div className="container">
            <h4>Your Order:</h4>

            <div className="order-list">
                {orderItems}
            </div>
                    <Button color="danger" size="lg" className="buy-icon">
                    <FontAwesomeIcon icon={faShoppingCart}/> 5 Items
                    </Button>
        </div>
        </>
    )
}

export default OrderTotal;