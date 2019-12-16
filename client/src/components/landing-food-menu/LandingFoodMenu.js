
import React, { useEffect, useState} from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Badge,CardImgOverlay} from 'reactstrap';
import '../../components/landing-food-menu/landing-food-menu.css' ;

async function getLandingMenu () {
    const response = await fetch('visitor/FoodMenu');
    const body = await response.json();
    console.log("Async function body: ", body)
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
};
function LandingMenu() {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getLandingMenu()
        .then(res => { 
            setMenuItems(res); 
            formatIngredients(res[0].ingredients)
        })
        .catch(e => {console.log(e)});
    }, [] );

    const menuCards = menuItems.map((model) =>

        <Col xs={12} sm = {12} lg={4} md={4} className="card-holder">
            <Card className = "food-menu-card">
            <CardImg top src={require("../../assets/img/Hamburger.jpg")} alt="..." />
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
    function formatIngredients(ingredients){
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
                <Container>
                    <Row>
                        {menuCards}
                    </Row>
                    <h6 style={{color: "orange", float: "right", fontSize: "12px", marginTop: "20px"}}>Show more</h6>
                </Container>
            </div>
        </>
            )
        }
        
        
export default LandingMenu;