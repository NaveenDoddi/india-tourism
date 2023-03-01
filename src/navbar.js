import React from "react";

function Navbar(){
    return(
        <>
            <div className="navbar fixed-top navbar-expand navbar-light bg-light">
                <div className="navbar-toggleable">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Search</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Logdiv">signin</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signupDiv">signup</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">☰</a>
                    </li>
                  </ul>
                </div>
            </div>
            <p>.</p>
            <p>.</p>
        </>
    )
}
export default Navbar