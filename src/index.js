import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Run1 from './checking';
import Run2 from './introduction';

import Navbar from './navbar';
import reportWebVitals from './reportWebVitals';

import { useState } from 'react';


export default function Run(){
  return(<>
  {/* <Navbar /> */}
    <App />
    {/* <Todo /> */}
    {/* <Run2 /> */}

  </>)
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run />)
reportWebVitals();
