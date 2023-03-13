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
        for(let i=0; i<Array1.length;i++){
            if(usernamedata==Array1[i][0]){
                if(passworddata==Array1[i][1]){
                    // window.location.pathname = ""
                    // alert("login succes")
                    console.log("F")
                }else{
                    alert("incorrect password")
                }
                
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
                    <input type="text" class="." id="usernameid" placeholder="@username" required/>
                </div>
                <div>
                    <label for="password">Pass word: </label>
                    <input type="password" class="." id="passwordid" placeholder="*******" required/>
                </div>
                <div className="btn-group"><button type="submit" class="btn" onClick={Checking}>signin</button><button class="btn" onClick={toCreate}>signup</button></div>
            </form>
            
            <p>forgoten password: email</p>
        </div>
        
    )
}
export default Logdiv

