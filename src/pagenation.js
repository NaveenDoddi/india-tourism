import React from "react";
import Navbar from 'react-bootstrap/Navbar';
var offwidth = document.getElementById("table-responsiveness").offsetWidth

function PageNation(){
    
    const style = {
        position:"relative",
        left: (offwidth/2)-135,
    }
    return(
        <>
        <Navbar bg="info" fixed='bottom' className='justify-content-center'>
      
            <Navbar.Brand href="">..</Navbar.Brand>
            <Navbar.Brand href="Table1">1</Navbar.Brand>
            <Navbar.Brand href="Table2">2</Navbar.Brand>
            <Navbar.Brand href="Table3">3</Navbar.Brand>
            <Navbar.Brand href="Table4">4</Navbar.Brand>
            <Navbar.Brand href="Table5">5</Navbar.Brand>
            <Navbar.Brand href="'">..</Navbar.Brand>

        </Navbar>
        <div style={{width:"auto"}}>
            <div className="pagination" style={style}>
                <a href="">..</a>
                <a href="Table1">1</a>
                <a href="Table2">2</a>
                <a href="Table3">3</a>
                <a href="Table4">4</a>
                <a href="Table5">5</a>
                <a href="">..</a>
            </div>
        </div>

        </>
    )
}
export default PageNation