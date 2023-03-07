import React from "react"
import { empdata80to100 } from "./dataEmployee"
function Table5(){
    return(
        <>
        <table className="table table-hover">
        <tr><td colSpan={6} style={{textAlign:"center"}}><h3>TABLE 5</h3></td></tr>
        <tbody>
        <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>gender</th>
                <th>salary</th>
                <th>phone</th>
            </tr>
            {empdata80to100.map((i)=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.first_name}</td>
                    <td>{i.last_name}</td>
                    <td>{i.gender}</td>
                    <td>{i.salary}</td>
                    <td>{i.phone}</td>
                </tr>
            )}
        </tbody>
            
            
        </table>
            
        </>
    )
}

export default Table5