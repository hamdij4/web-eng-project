import './order-menu.css'
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { Container, Col, Row } from 'reactstrap'
import { Card, CardImg, CardBody, CardTitle, CardText, Badge, CardImgOverlay } from 'reactstrap';

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

async function getOrderByType() {
    const response = await fetch('visitor/FoodMenu/Dessert');
    const body = await response.json();
    if(response.status !== 200){
        throw Error(body.message)
    }
    return body;
}


function OrderMenuComponent() {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        getOrderByType()
        .then(res => {
            setMenuItems(res)
        }).catch(e=>{console.log("Error at client -> FoodMenu/:type", e)})
    }, []);

    const menuCards = menuItems.map((model) => 

        <Col lg={4} md={4} sm={4} className="food-col">
            <Card className="food-card">
                <CardImg top src={require("../../../assets/img/Hamburger.jpg")} alt="..." />
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

    function formatIngredients(ingredients){
        let model = "";
        Object.keys(ingredients).forEach(ingredient => {
            model += ingredient + "  "
        });
        return model;
    }
    return (
        <>
            <div className="holder">
                <div className="title">
                    <h2>
                        Desserts
                    </h2>
                </div>
                <Container className="card-container">
                    <Row>
                       {menuCards}
                    </Row>
                </Container>
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

export default OrderMenuComponent;