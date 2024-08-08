import React, { useState } from "react";
import { useRef } from "react";
export default function TODO(){

      const inputref = useRef('')
      const [items, setItems] = useState([])
      const [bool, setBool] = useState(true)

      
      const send=()=>{
            var input = inputref.current.value
            inputref.current.value = ""
            setItems([input,...items])

      }


      const edit = (element) =>{
            if(bool){
                  var value = element.target.parentNode.childNodes[0].innerText
                  var input = element.target.parentNode.childNodes[1]
                  input.style.display = "inline"
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
            
            setBool(true)
            element.target.parentNode.style.display = "none"
      }

      return(
            <>
            <h1>todo list</h1>
            <input ref={ inputref }/>
            <button onClick={send}>send</button>

            <div>
                  {
                        items.map((item,index)=>{
                              return(

                                    <div id={index} style={{display:"block"}}>
                                          <span>{item}</span>
                                          <input style={{display:"none"}}/>
                                          <button onClick={edit}>edit</button>
                                          <button onClick={dele}>delete</button>
                                    </div>
                              )
                        })
                  }
            </div>
            </>
      )
}