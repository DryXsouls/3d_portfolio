import React from "react";
import Hero from '../Hero'
import About from '../About'
import Portfolio from "../Portfolio.jsx";
import Contact from "../Contact.jsx";
function Home(){
    return(
        <div className='background-color: red'>
            <Hero/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default Home;
