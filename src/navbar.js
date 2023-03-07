import React from "react";


function Navbar(){
  var  bodywidth = document.getElementsByClassName("table-responsive")[0].offsetWidth
  console.log(bodywidth)
  const style = {
    width:bodywidth/10
  }
  const style1 = {
    width:bodywidth/4
  }
 
  return(
    <>
      <div className="">
        <div className="col-sm-2" id="nav" style={style}>
            <a href="#">☰</a>
          </div>
          <div className="col-sm-2" id="nav" style={style}>
            <a href="#"><i class="material-icons">home</i></a>
          </div>
          <div className="col-sm-2" id="nav" style={style1}>
            <a href="#"></a>
          </div>
          <div className="col-sm-2" id="nav" style={style}>
            <a href="#"><i class="material-icons">search</i></a>
          </div>
          <div className="col-sm-2" id="nav" style={style1}>
            <a href="#"></a>
          </div>
          
          <div className="col-sm-2" id="nav" style={style}>
            <a href="/Logdiv">signin</a>
          </div>
          <div className="col-sm-2" id="nav" style={style}>
            <a href="/signupDiv">signup</a>
          </div>
          
      </div>
      <p></p>
    </>
  )
}
export default Navbar