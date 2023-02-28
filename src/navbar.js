import React from "react";

function Navbar(){
    return(
        <>
            <nav class="navbar fixed-top navbar-expand navbar-light bg-light">
                <div class=" navbar-toggleable">
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
            <p>.</p>
            <p>.</p>
        </>
    )
}
export default Navbar