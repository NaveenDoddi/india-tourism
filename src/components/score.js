import React from "react";
import { useState, useRef } from "react";


export default function Score(){

      const [innings1, setInnings1] = useState(true)
      const [innings2, setInnings2] = useState(false)
      const [score, setScore] = useState(0)
      const [score1, setScore1] = useState(0)
      const [score2, setScore2] = useState(0)
      
      const [wickets, setWickets] = useState(0)
      const [wickets1, setWickets1] = useState(0)
      const [wickets2, setWickets2] = useState(0)
      
      const [balls, setBalls] = useState(0)
      const [balls1, setBalls1] = useState(0)
      const [balls2, setBalls2] = useState(0)

      const [overs, setOvers] = useState(0)
      const [overs1, setOvers1] = useState(0)
      const [overs2, setOvers2] = useState(0)

      // var score1, wickets1, score2, wickets2, overs1, balls1, overs2, balls2

      const [target1, setTarget1] = useState('')

      const run = (element) =>{
            var value = Number(element.target.innerText)
            setBalls(balls + 1)

            isNaN(value) ? setWickets(wickets + 1): setScore(score + value) 
            

            if(overs == 1 || wickets == 10){
                  setScore1(score)
                  setWickets1(wickets)
                  setOvers1(overs)
                  setBalls1(balls)
                  
                  setTarget1(score + '-' + wickets)

                  setScore(0)
                  setWickets(0)
                  setOvers(0)
                  setBalls(0)
                  setInnings1(false)
                  setInnings2(true)
            }

            if(balls == 5){
                  setBalls(0)
                  setOvers(overs + 1)
            }            
            if(innings2){
                  console.log("match over")
                  // element.target.onClick = ''
            }
      }
      
      const team = {
            border:"1px solid", 
            padding:"10px",
            
            backgroundColor:"pink",
            textAlign:"center",
      }

      return(
            <div style={{display:"flex", justifyContent:"center"}}>

                  <div >
                  <div style={{display:"flex", gap:"20px"}}>
                  <div style={team}>
                        Team 1
                        <div style={{backgroundColor:"skyblue"}}>
                              <div>
                                    {innings1 ? score+ '-' + wickets:score1 + '-' + wickets1}
                              </div>
                              <div>
                                    {innings1 ? overs+ '.' + balls:overs1 + '.' + balls1}
                              </div>
                        </div>
                                                
                  </div>
                        VS
                  <div style={team}>Team 2
                  <div style={{backgroundColor:"skyblue"}}>
                              <div>
                                    {innings2 ? score+ '-' + wickets:score2 + '-' + wickets2}
                              </div>
                              <div>
                                    {innings2 ? overs+ '.' + balls:overs2 + '.' + balls2}
                              </div>
                        </div>
                        
                  </div>
                  </div>

                  <div style={{display:"flex", gap:"20px"}}>
                        <div style={{backgroundColor:"skyblue"}}>
                              target: {target1}
                        </div>
                  </div>
                  
                  <div>
                        <button onClick={run}>0</button>
                        <button onClick={run}>1</button>
                        <button onClick={run}>2</button>
                        <button onClick={run}>3</button>
                        <button onClick={run}>4</button>
                        <button onClick={run}>6</button>
                        <button onClick={run}>W</button>
                  </div>

                  </div>

                  
            </div>
      )
}