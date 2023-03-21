import React from "react";
import { useHistory } from 'react-router-dom';

var offwidth = document.getElementById("table-responsiveness").offsetWidth

const Array1 = [['naveen',123,"naveen",12062003,"male",'prasadnaveen847@gmailcom']]
function SignupDiv(){
  const stylesignupDiv={
    height : "465px",
    width : "350px",
    // border : "2px solid black",
    position : "relative",
    // top : "200px",
    left : (offwidth/2)-175,
    textAlign :"center",
    padding : "10px"
  }
  
  // function Creating(){
    
  //   var count= 0
  //   var arr = []
  //   for(let i = 0; i<6; i++){  
  //     var data = document.getElementsByTagName("input")[i].value
  //     if(data!=""){
  //       arr.push(data) 
  //       count++
  //     }
      
  //   }
  
  // Array1.push(arr)
  // console.log(Array1)
  // var form = document.forms["form"]
  // if(form.checkValidity(true)){
  //   window.location.pathname = "/Logdiv";
  // }

  // }
  function Creating() {
    const history = useHistory();
    history.push('/next-component');
  }
  return (
    <>
      <table className="talbe" style={stylesignupDiv}>
        <thead>
          <tr><th style={{color:"red", textDecoration:"underline"}}><h4>Create account in GAME-TD</h4></th></tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <form id="form" className="needs-validation col-auto">
                First Name: <input style={{width:"170px"}} required/><br /><br />
                Last Name: <input style={{width:"170px"}} required/><br /><br />
                DOB: <input type="date" data-date-format="DD MMMM YYYY" style={{width:"120px"}} required/>
                gender: <select name="gender" id="gender" required>
                          <option value=""></option>
                          <option value="M">M</option>
                          <option value="F">F</option>
                          <option value="T">T</option>
                        </select><br /><br />
                Email: <input type={"email"} style={{width:"210px"}} required/><br /><br />
                Username: <input style={{width:"170px"}} required/><br /><br />
                password : <input type={"password"} style={{width:"175px"}} required/><br /><br />
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label class="form-check-label" for="invalidCheck"><small>Agree terms and conditions </small><p></p></label>
                <div style={{textAlign:"right"}}><button className="btn btn-success" type={"submit"} id={"btn"} onClick={Creating}>Create</button></div>
                </form>
            </td>
          </tr>
        </tbody>  
      </table> 
    </>
  )
}
export default SignupDiv
export {Array1}

