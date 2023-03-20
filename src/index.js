import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logdiv from './login';
import SignupDiv from './signupage';
// import Dashboard from './userdashboard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navbar';
import Table1 from "./empTable1";
import Table2 from "./empTable2";
import Table3 from "./empTable3";
import Table4 from "./empTable4";
import Table5 from "./empTable5";
import PageNation from './pagenation';

// import PageNation from './pagenation';

export default function Run(){
  return(<>
  {/* <Yes/> */}
  <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table1 />} />
          <Route path="/SignupDiv" element={< SignupDiv/>} />
          <Route path="/Logdiv" element={< Logdiv />} />
          <Route path="/Table1" element={<Table1 />} />
          <Route path="/Table2" element={<Table2 />} />
          <Route path="/Table3" element={<Table3 />} />
          <Route path="/Table4" element={<Table4 />} />
          <Route path="/Table5" element={<Table5 />} />
      </Routes>
    </BrowserRouter>
    <PageNation />
    
  </>)
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run />)
reportWebVitals();
