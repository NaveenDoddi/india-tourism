import React from "react";
import { useState,useRef } from "react";

export default function Search(){
      const [valueInput, setValue] = useState([])
      const inputRef = useRef("")
      const ul = useRef("")
      var list = ["chennai", "bangalore", "hyderabad","sydney", "melborne", "perth","lords", "london", "edbingstone"]
      
      const searching = () =>{
            var input = inputRef.current.value
            setValue(list.filter((city) => city.indexOf(input) >=0))
            
      }
      
      return(
            <div>
                  <h1>search cities</h1>
                  <input ref={inputRef} onKeyUp={searching}/>
                  <button onClick={searching}>search</button>
                  <ul ref={ul}>
                  
                  {valueInput.map((item)=>{
                        return(<li>{item}</li>)
                  })}
                  </ul>
                  
            </div>

      )
}
