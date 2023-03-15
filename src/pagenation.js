import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Table1 from "./empTable1";
import Table2 from "./empTable2";
import Table3 from "./empTable3";
import Table4 from "./empTable4";
import Table5 from "./empTable5";

var offwidth = document.getElementById("table-responsiveness").offsetWidth
console.log(offwidth)
function PageNation(){
    
    const style = {
        position:"relative",
        left: (offwidth/2)-112,
    }
    return(
        <>
        {/* <BrowserRouter> */}
           
        {/* </BrowserRouter> */}
        <div style={{width:"auto"}}>
            <div className="pagination" style={style}>
                <a href="">..</a>
                <a href="./Table1">1</a>
                <a href="Table2">2</a>
                <a href="Table3">3</a>
                <a href="Table4">4</a>
                <a href="Table5">5</a>
                <a href="">..</a>
            </div>
        </div>
        
            <Routes>
                <Route path="pageNation/Table1" element={<Table1 />} />
                <Route path="/Table2" element={<Table2 />} />
                <Route path="/Table3" element={<Table3 />} />
                <Route path="/Table4" element={<Table4 />} />
                <Route path="/Table5" element={<Table5 />} />
            </Routes>
        </>
    )
}
export default PageNation