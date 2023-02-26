import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){
    return(
        <>
            <nav class="navbar fixed-top navbar-expand navbar-light bg-light">
                <div class=" navbar-toggleable-lg">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Search</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Notifications</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Messages</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="SignupDiv">☰</a>
                    </li>
                  </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar