import React from "react"
import { empdata1to20 } from "./dataEmployee"
import './index.css';


function Table1(){
    return(
        <>
        <table className={"table table-hover table-light"}>
        <tr><td colSpan={6} style={{textAlign:"center"}}><h3>TABLE 1</h3></td></tr>
            <tbody>
            <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>gender</th>
                <th>salary</th>
                <th>phone</th>
            </tr>
            {empdata1to20.map((i) =>
                <tr style={{padding:"5px"}}>
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

export default Table1 


