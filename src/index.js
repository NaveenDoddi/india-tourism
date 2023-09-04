import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import Todo from './todo';
import Run1 from './checking';
import reportWebVitals from './reportWebVitals';



export default function Run(){
  return(<>
    {/* <App /> */}
    <Todo />
    {/* <Run1 /> */}
  </>)
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Run />)
reportWebVitals();
