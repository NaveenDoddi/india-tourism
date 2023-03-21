import React from "react";
import Navbar from "./navbar";
import PageNation from "./pagenation";
import Table1 from "./empTable1";
import Table2 from "./empTable2";
import Table3 from "./empTable3";
import Table4 from "./empTable4";
import Table5 from "./empTable5";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Dashboard(){
    return(
    <> 
        <Navbar />
        <BrowserRouter>
          <Routes>
              <Route path="/Table1" element={<Table1 />} />
              <Route path="/Table2" element={<Table2 />} />
              <Route path="/Table3" element={<Table3 />} />
              <Route path="/Table4" element={<Table4 />} />
              <Route path="/Table5" element={<Table5 />} />
          </Routes>
        </BrowserRouter>
        <PageNation/>
        </>
    )
}
export default Dashboard
