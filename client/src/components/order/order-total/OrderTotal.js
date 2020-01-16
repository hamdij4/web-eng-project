import React, { useEffect, useState, useCallback } from 'react'
import './order-total.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import Switch from 'react-bootstrap-switch';
import store from "../../../redux/store/index"
import { removeItemFromCart } from "../../../redux/actions/index"
import axios from 'axios'
import { Modal, ModalHeader, ModalBody, Label, Input } from 'reactstrap';

import { useDispatch, useSelector } from "react-redux";
function OrderTotal() {
    let priceTotal = 0
    const [orderModel, setOrderModel] = useState({
        username: "",
        price: 0,
        delivery: false,
        cashier: "",
        driver: "",
        paid: false,
        serial_no: 0,
        order: [],
        registered: true
    })
    const [formData, setFormData] = useState({
        username: localStorage.getItem('user') || '',
        telephone: ''
    })
    const orderList = useSelector(state => state.orderCart)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const toggle = () => setModal(!modal)
    const submitOrder = async () => {
        await axios.post('/visitor/order/post', orderModel)
            .then(res => {
            })
            .catch(error => {
                alert("An error occured!")
            })
            .finally(
            )
    }
    const handleInputField = useCallback(event => {
        orderModel.registered = false;
        setFormData({ ...formData, [event.target.name]: event.target.value })
    })
    function getColorAndUpdatePrice(cat, price) {
        priceTotal += price;
        switch (cat) {
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
    const orderItems = orderList.map((itemModel) =>
        <>
            <Button color={getColorAndUpdatePrice(itemModel.category, itemModel.price)} className="order-item"
                onClick={() => { dispatch(removeItemFromCart(itemModel)) }}> {itemModel.name}
                <FontAwesomeIcon className="remove-icon" icon={faTrash}></FontAwesomeIcon></Button><br></br>
        </>
    )
    const modalItems = orderList.map((itemModel) =>
        <>
            <Button color={getColorAndUpdatePrice(itemModel.category, itemModel.price)} className="modal-item"
                onClick={() => { dispatch(removeItemFromCart(itemModel)) }}> {itemModel.name} <b className="modal-tag-price">{itemModel.price}KM</b></Button>
        </>
    )
    return (
        <>
            <div className="container">
                <h2>
                    {priceTotal} KM</h2>

                <div className="order-list">
                    {orderItems}
                </div>
                <Button color="danger" size="lg" className="buy-icon" onClick={() => {
                    orderModel.order = orderList
                    orderModel.username = localStorage.getItem('user')
                    orderModel.price = priceTotal;
                    toggle()
                }}>
                    <FontAwesomeIcon icon={faShoppingCart} /> {orderList.length} Items
                    </Button>
            </div>

            <Modal isOpen={modal} toggle={toggle} className='order-modal'>
                <ModalHeader toggle={toggle}><h2>Your Order</h2></ModalHeader>
                <ModalBody className="modal-body">
                    <span><h4>Your order of {orderList.length} items : <br></br></h4></span>
                    {modalItems}
                    <span><h4 style={{ marginBottom: '15px' }}>Delivery specifics: <br></br></h4></span>
                    <div className="delivery-options">
                        <h6>Car delivery: <Switch onChange={() => { orderModel.delivery = !orderModel.delivery }}
                            onText='YES' offText='NO' checked={orderModel.delivery}
                        /><br></br><span style={{ color: 'lightgray' }}> Only for orders 10KM +</span> </h6>
                        <h6>Express delivery: <Switch onChange={() => { orderModel.delivery = !orderModel.delivery }}
                            onText='YES' offText='NO' checked={orderModel.delivery}
                        /><br></br><span style={{ color: 'lightgray' }}> +2KM on total price</span> </h6>
                    </div>
                    <div>
                        <h4>Total price:</h4>
                        <span className="modal-total">{priceTotal} KM</span>
                    </div>
                    {localStorage.getItem('user') == null ? (<div className="unregistered-info">
                        <Label for="username">Name and Surname</Label>
                        <Input className="modal-input" onChange={handleInputField} type="text" name="username" placeholder="John Smith" />
                        <Label for="username">Telephone Number</Label>
                        <Input className="modal-input" onChange={handleInputField} type="text" name="telephone" placeholder="+387 ..." />
                    </div>) : (null)}
                    <Button color="danger" size="lg" className="buy-icon" onClick={() => {

                        if (orderModel.registered == false) {
                            orderModel.username = formData.username
                            orderModel.telephone = formData.telephone
                        }
                        submitOrder()
                        setModal(false);
                        console.log(orderModel)
                    }}>BUY NOW</Button>
                    <br></br><span style={{ color: 'orange' }}>Our driver will call your phone number when he arrives</span>
                </ModalBody>
            </Modal>
        </>
    )
}

export default OrderTotal;