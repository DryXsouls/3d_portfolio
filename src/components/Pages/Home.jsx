import React from "react";
import Hero from '../Hero'
import About from '../About'
import Portfolio from "../Portfolio.jsx";
function Home(){
    return(
        <div className='background-color: red'>
            <Hero/>
            <About/>
            <Portfolio/>
        </div>
    );
}

export default Home;
