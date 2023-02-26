import React from "react";
import { Link } from "react-router-dom";
import Logdiv from "./login";
import { Route } from "react-router-dom";

const Array1 = []
const SignupDiv=()=>{
    // return <h1>hi</h1>
    const stylesignupDiv={
        height : "330px",
        width : "300px",
        border : "2px solid black",
        position : "relative",
        top : "300px",
        left : "100px",
        textAlign :"center",
        padding : "10px"
    }
    
    function Creating(){
        
        var arr = []
        var count = 0
        for(let i = 0; i<6; i++){
            
            var data = document.getElementsByTagName("input")[i].value
            arr.push(data)
            if(data==""){count++}
            
            
        }
    
    Array1.push(arr)
    if (count<<6){alert("input is empty")}else{<Route path="/" element={<Logdiv />} />}
    
    }
    return (
        <>
            <div style={stylesignupDiv}>
                <h5 style={{color : "red",textDecoration:"underline"}}>Create account in GAME-TD</h5>
                <label>
                    
                    username: <input style={{width:"170px"}}/><br /><br />
                    password : <input type={"password"} style={{width:"175px"}}/><br /><br />
                    Name: <input style={{width:"200px"}}/><br /><br />
                    DOB: <input type={"number"} style={{width:"85px"}}/>
                    gender: <input list="gender" style={{width:"65px"}}/><br /><br />
                    Email: <input type={"email"} style={{width:"210px"}}/><br /><br />
                    
                    <button onClick={Creating}> <Link to={"/"}>Create</Link></button> {/* give access to goto dashboard */}

                </label>
            </div>
            <datalist id={"gender"}>
                <option value={"male"}></option>
                <option value={"female"}></option>
                <option value={"trans"}></option>

            </datalist>
        </>
    )
}
export default SignupDiv
export {Array1}