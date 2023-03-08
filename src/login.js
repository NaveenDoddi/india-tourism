import React, { useRef } from "react";
// import signupDiv from "./signupage";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import { Array1 } from "./signupage";


const Logdiv=()=>{
    const styleLoginDiv ={
        height : "200px",
        width : "450px",
        border : "2px solid black",
        position : "relative",
        top : "300px",
        left : "100px",
        textAlign :"center",
        padding : "10px",
    }
    
    
    function Checking(){
        var usernamedata = document.getElementById("usernameid").value
        var passworddata = document.getElementById("passwordid").value
        
        if(usernamedata=="1"){
            if(passworddata=="1"){
                window.location.pathname = "/run"
                alert("login succes")
                console.log("F")
            }else{
                alert("incorrect password")
            }
            
        }
         
    }
    function toCreate(){
        window.location.pathname = "/SignupDiv";
    }
    

    return(
                
        <div style={styleLoginDiv}>
            
            <h4 style={{color : "red",textDecoration:"underline"}}>Login to GAME-TD</h4>
            <form className="needs-validation">
                <div>
                    <label for="username">Username: </label>
                    <input type="text" class="." id="username" placeholder="@username" required/>
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                <div>
                    <label for="password">Pass word: </label>
                    <input type="password" class="." id="password" placeholder="password" required/>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                </div>
                <button class="btn btn-sm" onClick={Checking}>signin</button><button class="btn" onClick={toCreate}>signup</button>
            </form>
            
            <p>forgoten password: email</p>
        </div>
        
    )
}
export default Logdiv

