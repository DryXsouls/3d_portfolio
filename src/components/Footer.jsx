import React from "react";

function Footer(){
    return(
        <section className='w-full h-half p-10 bg-black flex flex-row justify-evenly content-center overflow-hidden'>
            <div className='m20 w-half h-32 content-center'>
                <p className='text-2xl text-white'>Copyright ©2024 Designed by Matúš Vytykáč</p>
            </div>
            <a href='#hero'  className='w-32 h-32 text-center content-center'>
                <p className='text-4xl text-white'>↑</p>
            </a>
        </section>
    );
}
export default Footer;