import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Logdiv from './login';
import SignupDiv from './signupage';
import Yes from './userdashboard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navbar';


export default function Run(){
  return(<>
    {/* <SignupDiv />
    <Logdiv /> */}
    < Yes />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logdiv />} />
          <Route path="/SignupDiv" element={< SignupDiv/>} />
          <Route path="/Yes" element={< Yes />} />
      </Routes>
    </BrowserRouter>
    
  </>)
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Run />)
reportWebVitals();
