import './order-mobile.css'
import React, { useEffect, useState, useCallback } from "react";
import { Container, Col, Row } from 'reactstrap'
import { Button, Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import axios from 'axios';
import { addItemToCart } from '../../../redux/actions/index'
import { removeItemFromCart } from '../../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import images from '../images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash, faHamburger, faPizzaSlice, faHotdog, faPepperHot, faIceCream } from '@fortawesome/free-solid-svg-icons';
import { changeOrderType } from '../../../redux/actions/index'
import Switch from 'react-bootstrap-switch';
import { Modal, ModalHeader, ModalBody, Label, Input } from 'reactstrap';
function OrderMobile() {
    const [menuItems, setMenuItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch()
    const orderType = useSelector(state => state.orderPageType)
    let query = 'visitor/foodmenu/' + orderType
    useEffect(() => {
        axios.get(query)
            .then(res => {
                setMenuItems(res.data)
                console.log(res.data)
            })
            .catch(err => {
                setIsLoaded(false)
                console.log("Error at foodmenu/:type GET", err)
            })
            .finally(
                setIsLoaded(true)
            )
    }, [query]);
    const menuCards = menuItems.map((model) =>

        <Col lg={4} md={4} sm={4} className="food-col">
            <Card className="food-card" onClick={() => dispatch(addItemToCart(model))}>
                <CardImg top src={getImageUri(model.name)} alt="..." />
                <Badge style={{ backgroundColor: getBgColor(orderType) }} pill className="price-tag">{model.price} KM</Badge>
                <CardTitle>
                    {model.name}
                </CardTitle>
                <CardBody>
                    <CardText>
                        <h6>{formatIngredients(model.ingredients)}</h6>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )

    function formatIngredients(ingredients) {
        let model = "";
        Object.keys(ingredients).forEach(ingredient => {
            model += ingredient.replace("_", " ") + " "
        });
        return model;
    }
    function getBgColor(type) {
        switch (type) {
            case "sweets":
                return '#51cbce'
            case "doner":
                return '#fbc658'
            case "hamburger":
                return '#fbc658'
            case "pizza":
                return '#f5593d'
            case "sandwich":
                return '#f5593d'
        }
        return "secondary"
    }
    function getImageUri(name) {
        const imageList = {
            'Small Doner': images.smalldoner,
            'Small Pancakes': images.smallpancakes,
            'Large Doner': images.largedoner,
            'Large Pancakes': images.largepancakes,
            'Small Chicken Sandwich': images.smallchickensandwich,
            'Large Chicken Sandwich': images.largechickensandwich,
            'Margharita': images.margharita,
            'Capricciosa': images.cappriciosa,
            'XL Burger': images.xlburger,
            'Burger': images.burger,
            'Kids Burger': images.kidsburger,
            'Kids Doner': images.kidsdoner
        }
        return imageList[name]
    } let priceTotal = 0
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

            <Button color={getColorAndUpdatePrice(itemModel.category, itemModel.price)} className="order-item"
                onClick={() => { dispatch(removeItemFromCart(itemModel)) }}> {itemModel.name}
                <FontAwesomeIcon className="remove-icon" icon={faTrash}></FontAwesomeIcon></Button><br></br>  </>
    )
    return (
        <>
            <div className="view-holder">
                <div className="category-select">
                    <Container style={{ marginTop: '10px' }}>
                        <Row>
                            <Button color="warning" className="button"
                                onClick={() => {
                                    dispatch(changeOrderType('hamburger'))
                                }}><FontAwesomeIcon icon={faHamburger} className="fa-icon" /></Button>
                            <Button color="danger" className="button"
                                onClick={() => {
                                    dispatch(changeOrderType('pizza'))
                                }}><FontAwesomeIcon icon={faPizzaSlice} className="fa-icon" /></Button>
                            <Button color="warning" className="button"
                                onClick={() => {
                                    dispatch(changeOrderType('doner'))
                                }}><FontAwesomeIcon icon={faPepperHot} className="fa-icon" /></Button>
                            <Button color="danger" className="button"
                                onClick={() => {
                                    dispatch(changeOrderType('sandwich'))
                                }}><FontAwesomeIcon icon={faHotdog} className="fa-icon" /></Button>
                            <Button color="primary" className="button"
                                onClick={() => {
                                    dispatch(changeOrderType('sweets'))
                                }}><FontAwesomeIcon icon={faIceCream} className="fa-icon" /></Button>
                        </Row>
                    </Container>
                </div>
                <div className="menu-holder-mobile">
                    {menuCards}
                </div>
                <div className="purchase-holder">
                    <Button color="danger" size="lg" className="buy-icon" onClick={() => {
                        orderModel.order = orderList
                        orderModel.username = localStorage.getItem('user')
                        orderModel.price = priceTotal;
                        toggle()
                    }} style={{ fontSize: '20px' }}>
                        <FontAwesomeIcon icon={faShoppingCart} /> {orderList.length} Items
                    </Button>
                </div>
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
                    <Button color="danger" style={{ marginBottom: '10px' }} className="buy-icon" onClick={() => {

                        if (orderModel.registered == false) {
                            orderModel.username = formData.username
                            orderModel.telephone = formData.telephone
                        }
                        submitOrder()

                        console.log(orderModel)
                    }}>BUY NOW</Button>
                    <br></br><span style={{ color: 'orange' }}>Our driver will call your phone number when he arrives</span>
                </ModalBody>
            </Modal>
        </>
    )
}

export default OrderMobile;