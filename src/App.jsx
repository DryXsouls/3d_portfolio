import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';

const App = () => {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
            </Routes>
        </Router>
    );
}
export default App