import React from "react";

function Footer(){
    return(
        <section className='w-full h-half p-10 bg-black flex flex-col md:flex-row items-center md:justify-evenly text-center content-center overflow-hidden'>
            <div className='m20 w-half h-32 content-center'>
                <p className='text-base text-nowrap lg:text-2xl text-white'>Copyright ©2024 Designed by Matúš Vytykáč</p>
            </div>
            <a href='#hero'  className='flex w-32 h-32 items-center justify-center content-center'>
                <p className=' text-4xl text-white hover:text-blue-500'>↑</p>
            </a>
        </section>
    );
}
export default Footer;