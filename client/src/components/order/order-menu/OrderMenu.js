import './order-menu.css'
import React, { useEffect, useState } from "react";
import { Container, Col, Row } from 'reactstrap'
import { Card, CardImg, CardBody, CardTitle, CardText, Badge, CardImgOverlay, Spinner } from 'reactstrap';
import { connect } from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import axios from 'axios';
import {addItemToCart} from '../../../redux/actions/index'
import { useDispatch, useSelector} from 'react-redux'
import { read } from 'fs';

function OrderMenuComponent() {
    const [menuItems, setMenuItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch()
    const orderType = useSelector(state => state.orderPageType)
    let query = 'visitor/foodmenu/' + orderType
    useEffect(() => {
        axios.get(query)
            .then(res => {
                setMenuItems(res.data)
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
                <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
                <Badge color="danger" pill className="price-tag">{model.price} KM</Badge>
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
    function getBgColor(type){
        switch(type){
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

    return (
        <>
            <div className="holder">
                <div className="title">
                    <h2 className="order-title" style={{backgroundColor : getBgColor(orderType)}}>
                        {orderType}
                    </h2>
                </div>
                {isLoaded ?
                    (
                        <Container className="card-container">
                            <Row>
                                {menuCards}
                            </Row>
                        </Container>
                    ) : (
                        <h3>Loading items...</h3>
                    )
                }
                <div className="pagination">
                    <nav aria-label="Page navigation example">
                        <Pagination>
                            <PaginationItem className="disabled">
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    Previous
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="active">
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    1
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    2
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    3
            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                    Next
            </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default connect(
    null,
    {addItemToCart}
)(OrderMenuComponent);