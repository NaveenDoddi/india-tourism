import React from "react"
import { empdata20to40 } from "./dataEmployee"
import Navbar from './navbar';
import PageNation from './pagenation';
function Table2(){
    return(
        <>
        <Navbar />
        <table className="table table-hover">
        <tr><td colSpan={6} style={{textAlign:"center"}}><h3>TABLE 2</h3></td></tr>
        <tbody>
        <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>gender</th>
                <th>salary</th>
                <th>phone</th>
            </tr>
            {empdata20to40.map((i)=>
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
        <PageNation />
            
        </>
    )
}

export default Table2