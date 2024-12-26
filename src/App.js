
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/home';
import Signup from './components/signup';

function App() {
    return (
        <>
            
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* <Route path="/contact" element={< />} /> */}
                </Routes>
            </Router>
        </>
    )
}
export default App
