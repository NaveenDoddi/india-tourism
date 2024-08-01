import React, { useRef } from "react";

// import { persons } from "./signupage";
import data from './database.json';
const persons = data
// console.log(persons)


const Logdiv=()=>{

    // function Checking(){
       
    //     var usernamedata = document.getElementById("usernameid").value
    //     var passworddata = document.getElementById("passwordid").value

    //     if(Object.values(persons).map((i)=>i.username == usernamedata) && Object.values(persons).map((i)=>i.password == passworddata)){
    //         alert("succes")
            
    //         Window.location.pathName = "http://localhost:3000/Table1";
    //         Window.Location.href = "http://localhost:3000/Table1"
    //     }

    //     // for (let i=0; i<persons.length; i++){
    //     //     for(let j in persons[i]){
    //     //         if(usernamedata == persons[i].username){
    //     //             if(passworddata == persons[i].password){
    //     //                 alert("Succes");
    //     //                 window.location.pathname = "/Table1";
    //     //                 break;
                        
    //     //             }else{
    //     //                 alert("fail")
    //     //                 break;
    //     //             }
    //     //         }
    //     //     }
    //     // }

    // }

    // return(
                
    //     <table className="" style={styleLoginDiv}>
    //         <thead>
    //             <tr>
    //                 <td><h4 style={{color:"red", textDecoration:"underline"}}>Log-in to GAME-TD</h4></td>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>
    //                 <form className="needs-validation">
    //                     <div>
    //                         <input type="text" class="." id="usernameid" placeholder="username" required/>
    //                     </div>
    //                     <div>
    //                         <input type="password" class="." id="passwordid" placeholder="*******" required/>
    //                     </div>
    //                     <div><button style={{width:"189px",borderRadius:"0px"}} class="btn btn-sm" onClick={Checking}>signin</button></div>
    //                 </form>
    //                 </td>
    //             </tr>
    //         </tbody>
    //        <tfoot>
    //         <tr>
    //             <td><small>forgotten password: <a href="">email</a></small></td>
    //         </tr>
    //         <tr>
    //             <td>or</td>
    //         </tr>
    //         <tr>
    //             <td><small>don't have account?<a href="/SignupDiv"> signup</a></small></td>
    //         </tr>
    //        </tfoot>
            
    //     </table>
        
    // )
    
}
export default Logdiv

