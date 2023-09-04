import React from "react";
import { useState } from "react";

function Run1(){

    const [current, setCurrent] = useState("")

    var text = "this is naveen kumar naidu reddy shuklam baradharam matharam vandhe matharam...".split("")
    var count = 0
    var para = document.createElement("p")

    for(let i = 0; i < text.length; i++){
        var span = document.createElement("span")
        span.innerText = text[i]
        para.append(span)
    }
    document.body.append(para)
    
    function go(){
        
        setCurrent(document.getElementById("input").value)

        var span = document.getElementsByTagName("span")[count+1]
        span.style.color = "red"
        
        var current = document.getElementById("input").value
        console.log(text[count] == current[count])
        if (text[count] == current[count]){
            document.getElementById("result").append(current[count]) 
        }else{
           
        }
        count++
        document.getElementsByTagName("span")[count-1].style.color = "black"
        
    }
    return(
        <>
        <input id="input" onChange={go}></input>
        <p>{current}</p>
        </>
    )
    
}
export default Run1