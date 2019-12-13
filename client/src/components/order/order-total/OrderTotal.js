import React from 'react'
import './order-total.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Button, Badge} from 'reactstrap'


function OrderTotal(){
    return (
        <>
        <div className="container">
            <h4>Your Order:</h4>

            <div className="order-list">
                <ul>
                    <li>Hamburger XL --- 1</li>
                    <li>Hamburger XL --- 1</li>
                    <li>Hamburger XL --- 1</li>
                    <li>Hamburger XL --- 1</li>
                    <li>Hamburger XL --- 1</li>
                </ul>
            </div>
                    <Button color="danger" size="lg" className="buy-icon">
                    <FontAwesomeIcon icon={faShoppingCart}/> 5 Items
                    </Button>
        </div>
        </>
    )
}

export default OrderTotal;