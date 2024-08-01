import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

export default function Run(){
  return(<>
    <App />
  </>)
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run />)
reportWebVitals();
