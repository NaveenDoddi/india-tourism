import React, { useRef } from "react";

import { Array1 } from "./signupage";

var offwidth = document.getElementById("table-responsiveness").offsetWidth
var offheight = document.getElementById("table-responsiveness").offsetHeight

const Logdiv=()=>{
    const styleLoginDiv ={
        height : "200px",
        width : "350px",
        top : offheight+80,
        position : "relative",
        left : (offwidth/2)-175,
        textAlign :"center",
    }
    function Checking(){
       
        var usernamedata = document.getElementById("usernameid").value
        var passworddata = document.getElementById("passwordid").value
        for(let i=0; i<Array1.length;i++){
            if(usernamedata==Array1[i][0]){
                if(passworddata==Array1[i][1]){
                    // window.location.pathname = "/SignupDiv"
                    
                }else{
                    alert("incorrect password")
                }
                
            }
        }

         
    }

    return(
                
        <table className="" style={styleLoginDiv}>
            <thead>
                <tr>
                    <td><h4 style={{color:"red", textDecoration:"underline"}}>Log-in to GAME-TD</h4></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <form className="needs-validation">
                        <div>
                            <input type="text" class="." id="usernameid" placeholder="username" required/>
                        </div>
                        <div>
                            <input type="password" class="." id="passwordid" placeholder="*******" required/>
                        </div>
                        <div><button style={{width:"189px",border:"1px solid",borderRadius:"0px"}} type="submit" class="btn btn-sm" onClick={Checking}>signin</button></div>
                    </form>
                    </td>
                </tr>
            </tbody>
           <tfoot>
            <tr>
                <td><small>forgotten password: <a href="">email</a></small></td>
            </tr>
            <tr>
                <td>or</td>
            </tr>
            <tr>
                <td><small>don't have account?<a href="/SignupDiv"> signup</a></small></td>
            </tr>
           </tfoot>
            
        </table>
        
    )
    
}
export default Logdiv

