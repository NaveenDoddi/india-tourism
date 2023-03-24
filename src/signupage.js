import React from "react";
// import { useHistory } from 'react-router-dom';

var offwidth = document.getElementById("table-responsiveness").offsetWidth
var offheight = document.getElementById("table-responsiveness").offsetHeight

var formData1 
// let Array1 = [["naveen","doddi",12062003,"male",'prasadnaveen847@gmailcom','naveen',123],["naveen","doddi",12062003,"male",'prasadnaveen847@gmailcom','navee',12]]
function SignupDiv(){
  const stylesignupDiv={
    height : "465px",
    width : "350px",
    // border : "2px solid black",
    position : "relative",
    top : offheight+50,
    left : (offwidth/2)-175,
    textAlign :"center",
    padding : "10px"
  }
  
  function Creating(){
    
    // var count= 0
    // var arr = []
    // for(let i = 0; i<6; i++){  
    //   var data = document.getElementsByTagName("input")[i].value
    //   if(data!=""){
    //     arr.push(data) 
    //     count++
    //   }
      
    // }
  
    
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstname = form.elements.firstname.value;
    const lastname = form.elements.lastname.value;
    const DOB = form.elements.DOB.value;
    const gender = form.elements.gender.value;
    const email = form.elements.email.value;
    const username = form.elements.username.value;
    const password = form.elements.password.value;

    let formData = {
      firstname: firstname,
      lastname: lastname,
      DOB: DOB,
      gender:gender,
      email: email,
      username: username,
      password: password,
    };
  formData = JSON.stringify(formData)
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: formData,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((response) => response.json())
  
  .then(function go(data){
    
    formData1 = data
  })
  
  // const myTimeout = setTimeout(console.log("naveen"), 5000);
  // console.log(myTimeout)

  
  
    // fetch('/submit-form', {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // window.location.pathname = "/"
    // console.log(formData);
  });

  
    // Array1.push(arr)
    // console.log(Array1)
    // var forms = document.forms["form"]
    // if(form.checkValidity()){
    //   window.location.pathname = "/Logdiv";
    // }

  }
  // function Creating() {
  //   // const history = useHistory();
  //   // history.push('/next-component');
  // }
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
                First Name: <input id="firstname" name="firstname" style={{width:"170px"}} required/><br /><br />
                Last Name: <input id="lastname" style={{width:"170px"}} required/><br /><br />
                DOB: <input id="DOB" type="date" data-date-format="DD MMMM YYYY" style={{width:"120px"}} required/>
                gender: <select name="gender" id="gender" required>
                          <option value=""></option>
                          <option value="M">M</option>
                          <option value="F">F</option>
                          <option value="T">T</option>
                        </select><br /><br />
                Email: <input id="email" type={"email"} style={{width:"210px"}} required/><br /><br />
                Username: <input id="username" style={{width:"170px"}} required/><br /><br />
                password : <input id="password" type={"password"} style={{width:"175px"}} required/><br /><br />
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

export {formData1 }
export default SignupDiv
// export default {formDa 

