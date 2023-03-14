import React from "react";

const Array1 = [['naveen',123,"naveen",12062003,"male",'prasadnaveen847@gmailcom']]
function SignupDiv(){
  const stylesignupDiv={
    height : "465px",
    width : "420px",
    border : "2px solid black",
    position : "relative",
    top : "200px",
    left : "100px",
    textAlign :"center",
    padding : "10px"
  }
  
  function Creating(){
      
    var arr = []
    for(let i = 0; i<6; i++){  
      var data = document.getElementsByTagName("input")[i].value
      arr.push(data) 
    }
  
  Array1.push(arr)
  console.log(Array1)
  window.location.pathname = "";
  
  

  }
  return (
    <>
        <div style={stylesignupDiv}>
        <h5 style={{color:"red", textDecoration:"underline"}}>Create account in GAME-TD</h5><p></p>
        <form className="needs-validation col-auto">
          
          First Name: <input style={{width:"170px"}} required/><br /><br />
          Last Name: <input style={{width:"170px"}} required/><br /><br />
          DOB: <input type="date" data-date-format="DD MMMM YYYY" style={{width:"120px"}} required/>
          gender: <select name="gender" id="gender">
                    <option value=""></option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    <option value="T">T</option>
                  </select><br /><br />
          Email: <input type={"email"} style={{width:"210px"}} required/><br /><br />
          username: <input style={{width:"170px"}} required/><br /><br />
          password : <input type={"password"} style={{width:"175px"}} required/><br /><br />
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          <label class="form-check-label" for="invalidCheck"><small>Agree tosss terms and conditions</small><p></p></label>
          <div style={{textAlign:"right"}}><button class="btn btn-outline-success" type="button" onClick={Creating}>Create</button></div>
        </form>
           
           
        </div>
        
    </>
  )
}
export default SignupDiv
export {Array1}