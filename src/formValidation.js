import React from "react";


function Form(){

      function validationChecking(){
            var nameBool = false
            var ageBool = false
            var mobileBool = false
            var checkboxBool = false
            var passwordBool = false

            var list = document.getElementsByTagName("input")
            var nameinput = list[0].value
            if(nameinput.length >= 6){
                  nameBool = true
            }
            var ageinput = list[1].value
            if(ageinput >= 18){
                  ageBool = true
            }
            var mobileinput = list[2].value
            if(mobileinput.length == 10){
                  mobileBool = true
            }
            var passwordinput = list[3].value
            if(passwordinput.length == 4){
                  passwordBool = true
            }
            var checkboxinput = list[4]
            checkboxBool = checkboxinput.checked

            if(nameBool && ageBool && mobileBool && passwordBool && checkboxBool){
                  alert("sign up successfully")
            }else{
                  alert("invalid form")
            }

            for (let index = 0; index < list.length; index++) {
                  
                  
            }
      }

      return(
            <>
            <div>
                  <div className="header">
                        <h1>sing up</h1>
                  </div>
                  <div className="body">
                        <form style={{display:"flex-column"}}>
                              <input placeholder="name" type="text"/> <br></br>
                              <input placeholder="age" type="number"/><br/>
                              <select>
                                    <option>male</option>
                                    <option>female</option>
                                    <option>trans</option>
                              </select><br/>
                              <input placeholder="mobile" /><br/>
                              <input placeholder="password" type="password" /><br/>
                              <label>acept terms and conditions <input type="checkbox"/></label>
                              <button onSubmit={validationChecking}>sign up</button>
                        </form>
                  </div>
                  <div className="footer">
                        
                  </div>
            </div>
            </>
      )
}

export default Form