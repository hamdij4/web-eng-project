
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "./components/Navbars/DemoNavbar.js";
import Footer from "./components/Footer/Footer.js";
import Sidebar from "./components/Sidebar/Sidebar";
import './components/Sidebar/sidebar.css'

import routes from "./components/routes";
import Dashboard from "./dashboard/Dashboard";

function AdminPanel(){
    return(
        <>
        <div className="wrapper">
            <Sidebar bgColor={"dark"} routes={routes} activeColor={"white"}/>
            <div className="main-panel">
                <DemoNavbar></DemoNavbar>
                <Dashboard></Dashboard>
                <Footer fluid/>
            </div>
        </div>
        </>
    )
}

export default AdminPanel