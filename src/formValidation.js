import React from "react";
import { useRef } from "react";


function Form(){
      const inputRef = useRef("")

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
                        </form>
                  </div>
                  <div className="footer">
                  <button onClick={validationChecking}>sign up</button>

                  </div>
            </div>
            </>
      )
}

export default Form