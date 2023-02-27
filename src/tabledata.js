import React, { startTransition } from "react"
import { data } from "./dataEmployee"
const data1 = []
for(let i=0; i<data.length; i++){
    data1.push(i)
}
function Table(){
    return(
        <>
        <table className={"table"}>
            
            {data.map((i) =>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.first_name}</td>
                    <td>{i.last_name}</td>
                    <td>{i.gender}</td>
                    <td>{i.salary}</td>
                    <td>{i.phone}</td>
                </tr>
                
            )}
            
        </table>
            


        </>
    )
   

        // console.log(data[i].length)
    
    
}
export default Table

