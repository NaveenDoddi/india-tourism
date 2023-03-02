import React from "react";


function Navbar(){
  var bodywidth = document.getElementsByClassName("table-responsive")[0].offsetWidth
  const style = {
    width:bodywidth/5
  }
  return(
    <>
      <div className=" row" >
          <div className="col-sm-2" id="nav" style={style}>
            <a href="#">Home</a>
          </div>
          <div className="col-sm-2" id="nav" style={style}>
            <a href="#">Search</a>
          </div>
          <div className="col-sm-2" id="nav" style={style}>
            <a href="/Logdiv">signin</a>
          </div>
          <div className="col-sm-2" id="nav" style={style}>
            <a href="/signupDiv">signup</a>
          </div>
          <div className="col-sm-2" id="nav" style={style}>
            <a href="#">☰</a>
          </div>
      </div>
      <p></p>
    </>
  )
}
export default Navbar