import React, { useRef } from "react";
// import signupDiv from "./signupage";

import { Array1 } from "./signupage";

var offwidth = document.getElementById("table-resposiveness").offsetWidth
// console.log(offwidth)
const Logdiv=()=>{
    const styleLoginDiv ={
        height : "200px",
        width : "350px",
        border : "2px solid black",
        position : "relative",
        top : "300px",
        left : (offwidth/2)-175,
        textAlign :"center",
        padding : "10px",
    }
    
    
    function Checking(){
        var usernamedata = document.getElementById("usernameid").value
        var passworddata = document.getElementById("passwordid").value
        for(let i=0; i<Array1.length;i++){
            if(usernamedata==Array1[i][0]){
                if(passworddata==Array1[i][1]){
                    window.location.pathname = ""
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
                
        <table style={styleLoginDiv}>
            <thead>
                <tr>
                    <td><h4 style={{color : "red",textDecoration:"underline"}}>Login to GAME-TD</h4></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
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
                    </td>
                </tr>
            </tbody>
           <tfoot>
            <tr>
                <td>forgoten password: email</td>
            </tr>
           </tfoot>
            
        </table>
        
    )
}
export default Logdiv

