import React from "react"
import { empdata60to80 } from "./dataEmployee"
function Table4(){
    return(
        <>
        <table className="table table-hover">
        <tr><td colSpan={6} style={{textAlign:"center"}}><h3>TABLE 4</h3></td></tr>
        <tbody>
        <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>gender</th>
                <th>salary</th>
                <th>phone</th>
            </tr>
            {empdata60to80.map((i)=>
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

export default Table4