import React from "react";
import {Link} from "react-router-dom";
import HeroMesh from "./HeroMesh.jsx";
import HeroSkillMesh from "./HeroSkillMesh.jsx";

function Hero(){
    return(
        <section className='flex flex-col-reverse w-full p-2 gap-x-2 lg:flex-row w-full h-fit md:p-5 lg:p-20 lg:mt-40' id='about'>
            <div className='w-full h-fit flex flex-col lg:w-2/4 lg:h-2/4'>
                <article className='relative flex-col w-full h-2/4 -top-20 space-y-3 space drop-shadow lg:p-10 lg:p-20'>
                    <h1 className='text-5xl text-white lg:text-5xl font-black'>Front-end React Developer</h1>
                    <p className='text-justify text-2xl font-normal lg:text-2xl'>
                        Hello there traveler I'm Matúš Vytykáč aspiring Front-end developer from Slovakia.</p>
                    <p className='text-2xl'>I also dabble in 3D designs sorcery</p>
                    <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                        <i className='fa fa-linkedin-square text-2xl'/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                        <i className='fa fa-github-square text-2xl'/>
                    </Link>
                </article>
                <div className='relative -top-56 w-full h-64 lg:-top-60 xl: xl:-top-80 2xl:-top-80 lg:h-96'>
                    <HeroSkillMesh/>
                </div>
            </div>

            <figure className='relative w-full h-96 -top-80 drop-shadow lg:w-2/4'>
                <HeroMesh/>
           </figure>
        </section>


    );
}
export default Hero;