import React, { useState } from "react";
import { useRef } from "react";
var array = ['first']
export default function TODO(){

      const inputref = useRef('')
      const editinput = useRef('')
      const [items, setItems] = useState([])
      const [bool, setBool] = useState(true)

      
      const send=()=>{
            // array.push(inputref.current.value)
            // setItems(array)

            setItems(
                  <div>
                        <span>{inputref.current.value}</span>
                        <input style={{display:"none"}}/>
                        <button onClick={edit}>edit</button>
                        <button onClick={dele}>delete</button>
                  </div>
                  
            )
            

      }

      const edit = (element) =>{
            if(bool){
                  var value = element.target.parentNode.childNodes[0].innerText
                  var input = element.target.parentNode.childNodes[1]
                  input.style.display = "block"
                  input.value = value
                  element.target.innerText = "update"
                  setBool(false)
            }else{
                  var input = element.target.parentNode.childNodes[1]
                  element.target.parentNode.childNodes[0].innerText = input.value
                  input.style.display = "none"
                  element.target.innerText = "edit"
                  setBool(true)

            }
            
            
      }
      const dele = (element) =>{
            element.target.parentNode.style.display = "none"
      }

      return(
            <>
            <h1>todo list</h1>
            <input ref={ inputref }/>
            <button onClick={send}>send</button>

            <div>
                  {items}
            </div>
            </>
      )
}