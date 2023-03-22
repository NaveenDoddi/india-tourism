import React from "react"
import { empdata40to60 } from "./dataEmployee"
import Navbar from './navbar';
import PageNation from './pagenation';
function Table3(){
    return(
        <>
        <Navbar />
        <table className="table table-hover">
        <tr><td colSpan={6} style={{textAlign:"center"}}><h3>TABLE 3</h3></td></tr>
            <tbody>
            <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>gender</th>
                <th>salary</th>
                <th>phone</th>
            </tr>
            {empdata40to60.map((i)=>
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

export default Table3