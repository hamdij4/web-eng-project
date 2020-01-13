/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import {Link} from 'react-router-dom'
import '../../components/navbar/navbar.css'
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container, Badge
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUtensils, faPhoneAlt, faUserCircle, faSignOutAlt, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
 
function IndexNavbar() {
  let loggedIn = (localStorage.getItem('token') != null);

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 0 ||
        document.body.scrollTop > 0
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [(localStorage.getItem('token') != null)]);

  return (
    <>
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link to ="/home">
          <NavbarBrand
            data-placement="bottom"
            target="_blank"
            title="Nummy v1.0.0"
          >
            Nummy
          </NavbarBrand>
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link to ="/home">
              <NavLink
                data-placement="bottom"
                target=""
                title="Follow us on Twitter"
              >
                <FontAwesomeIcon className="fa-icon" icon={faHome}/>
                <span>Home</span>
              </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to ="/order">
              <NavLink
                data-placement="bottom"
                target="_blank"
                title="Like us on Facebook"
              >
              <FontAwesomeIcon className="fa-icon" icon={faUtensils}/>
                <span>Order</span>
              </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                target="_blank"
                title="Follow us on Instagram"
              >
              <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt}/>
                <span>Contact</span>
              </NavLink>
            </NavItem>
            {loggedIn ? 
            (<><NavItem>
              <NavLink
              > 
                <Link to ="/" className="user-icon">
                  <Badge color="warning" className="user-badge">
<FontAwesomeIcon icon={faUserCircle} className="fa-user"/> <span>{ localStorage.getItem('user')}</span> </Badge>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              > 
                <Link to ="/" className="logout-icon" onClick={()=>{
                  localStorage.clear();
                }}>
            <FontAwesomeIcon icon={faSignOutAlt}/>
                </Link>
              </NavLink>
            </NavItem>
            </>) : (
              <>
              <NavItem>
                <NavLink
                > 
                  <Link to ="/login">
                    <span style={{color: "white", fontWeight : "700", fontSize:"15px"}}>
                       Login</span>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to ="/register">
                <Button
                  className="btn-round"
                  color="warning"
                >
                  Register
                </Button>
                </Link>
              </NavItem> </>)}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default IndexNavbar;
