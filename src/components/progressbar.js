import React from "react";

import { useState, useRef } from "react";

export default function Progressbar(){

      const [percentage, setPercentage] = useState(45)

      const inputRef = useRef()

      const progess = {
            height:"40px", 
            width:"100%",
            border:"2px solid black",
            borderRadius:"10px",
            display:"flex",
            alignItems:"center",
            justifyContent:"start",
            padding:"5px"
      }

      const battery ={
            height:"30px",
            width: percentage+"%",
            border:"2px solid green",
            borderRadius:"10px",
            backgroundColor:"green",
            textAlign:"center"
      }

      return(
            <div style={{textAlign:"center",gap:"10px"}}>
            <h1>Progress bar</h1>
            <input placeholder="give input for progress" type="number" onKeyUp={(e)=>{setPercentage(e.target.value)}}/>
            <div style={progess}>
                  <div style={battery}>{percentage}</div>
            </div>
            
            </div>
      )
}