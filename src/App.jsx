import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import './i18n.js';

const App = () => {
    const{t}=useTranslation();
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App