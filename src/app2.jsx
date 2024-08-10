import React from "react";

import Home from "./components1.js/home";
import Header from "./components1.js/header";
import Sidebar from "./components1.js/sidebar";

import { useState } from "react";
import './App.css'
function App2(){

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () =>{
        setOpenSidebarToggle(!openSidebarToggle)
        console.log(openSidebarToggle)
    }

    return(
    <div className="grid-container">
        <Header OpenSidebar = {OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home />
    </div>
    )
}
export default App2
