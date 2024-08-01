import React from "react";
import Table1 from "./empTable1";
import Table2 from "./empTable2";
import Table3 from "./empTable3";
import Table4 from "./empTable4";
import Table5 from "./empTable5";
import Logdiv from "./login";
import SignupDiv from "./signupage";
import MyForm from "./example";
import Navbar from "./navbar";
import PageNation from "./pagenation";

import Dashboard from "./card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
    return(
    <>
        {/* <MyForm /> */}
        {/* <Navbar /> */}
        <BrowserRouter>
          <Routes>
              <Route path="/" element={< Dashboard />} />
              <Route path="/SignupDiv" element={< SignupDiv />} />
              <Route path="/Table1" element={<Table1 />} />
              <Route path="/Table2" element={<Table2 />} />
              <Route path="/Table3" element={<Table3 />} />
              <Route path="/Table4" element={<Table4 />} />
              <Route path="/Table5" element={<Table5 />} />
          </Routes>
        </BrowserRouter>
        {/* <PageNation/> */}
        </>
    )
}
export default App
