import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Table1 from "./empTable1";
import Table2 from "./empTable2";
import Table3 from "./empTable3";
import Table4 from "./empTable4";
import Table5 from "./empTable5";

function PageNation(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/Table1" element={<Table1 />} />
                <Route path="/Table2" element={<Table2 />} />
                <Route path="/Table3" element={<Table3 />} />
                <Route path="/Table4" element={<Table4 />} />
                <Route path="/Table5" element={<Table5 />} />
            </Routes>
        </BrowserRouter>
        <div className="pagination">
            <a href="">..</a>
            <a href="Table1">1</a>
            <a href="Table2">2</a>
            <a href="Table3">3</a>
            <a href="Table4">4</a>
            <a href="Table5">5</a>
            <a href="">..</a>
        </div>
        </>
    )
}

export default PageNation