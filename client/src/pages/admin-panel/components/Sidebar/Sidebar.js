/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faDigitalTachograph, faReceipt, faShoppingBag, faUsers } from "@fortawesome/free-solid-svg-icons";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sidebar = React.createRef();
  }
  render() {
    return (
      <div
        className="sidebar-admin"
        data-color="orange"
        data-active-color="red"
      >
        <div>
<h1> Nummy</h1>    </div>    <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
                <li className="nav-link"
                >
                  <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                  > <FontAwesomeIcon icon={faDigitalTachograph} style={{marginRight: '15px'}}/> S T A T S
                  </NavLink>
                </li>
                <li className="nav-link"
                >
                  <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                  > <FontAwesomeIcon icon={faReceipt} style={{marginRight: '15px'}}/> O R D E R S
                  </NavLink>
                </li>
                <li className="nav-link"
                >
                  <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                  > <FontAwesomeIcon icon={faUsers} style={{marginRight: '15px'}}/> W O R K E R S
                  </NavLink>
                </li>
                <li className="nav-link"
                >
                  <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                  > <FontAwesomeIcon icon={faShoppingBag} style={{marginRight: '15px'}}/> S T O R A G E
                  </NavLink>
                </li>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
