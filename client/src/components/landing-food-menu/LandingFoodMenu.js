
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import '../../components/landing-food-menu/landing-food-menu.css';
import axios from 'axios'
import images from '../order/images'
async function getLandingMenu() {
    const response = await fetch('visitor/FoodMenu');
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
};


function LandingMenu() {

    const [isLoaded, setIsLoaded] = useState(false);

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('visitor/foodmenu')
            .then(res => {
                setMenuItems(res.data)
            })
            .catch(err => {
                console.log("Error at visitor/foodmenu GET: ", err)
            })
            .finally(
                setIsLoaded(true)
            )
    }, []);

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
    }
    const menuCards = menuItems.map((model) =>

        <Col xs={12} sm={12} lg={4} md={4} className="card-holder">
            <Card className="food-menu-card">
                <CardImg top src={getImageUri(model.name)} alt="..." />
                <Badge color="danger" pill className="price-tag">{model.price} KM</Badge>
                <CardTitle>
                    {model.name}
                </CardTitle>
                <CardBody>
                    <CardText>
                        <h5>Ingredients: </h5><br></br>
                        <h6>{formatIngredients(model.ingredients)}</h6></CardText>
                </CardBody>
            </Card>
        </Col>
    );
    function formatIngredients(ingredients) {
        let model = "";
        Object.keys(ingredients).forEach(ingredient => {
            model += ingredient + "  "
        });
        return model;
    }
    return (
        <>
            <div className="menu-holder">
                <h3 style={{
                    marginBottom: "40px",
                    fontWeight: "600"
                }}>Today's hot offers:</h3>
                {isLoaded ?
                    (
                        <Container>
                            <Row>
                                {menuCards}
                            </Row>
                            <h6 style={{ color: "orange", float: "right", fontSize: "12px", marginTop: "20px" }}>Show more</h6>
                        </Container>
                    ) : (
                        <h3>Loading items....</h3>
                    )}
            </div>
        </>
    )
}


export default LandingMenu;