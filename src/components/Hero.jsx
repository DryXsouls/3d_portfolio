import React from "react";
import {Link} from "react-router-dom";
import HeroMesh from "./HeroMesh.jsx";
import HeroSkillMesh from "./HeroSkillMesh.jsx";

function Hero(){
    return(
        <section className='p-20 w-screen h-screen' id='hero'>
                <div className='overflow-hidden'>
                    <div className='flex w-full h-screen pt-20'>
                        <div className='flex flex-col w-2/4 h-2/4 '>
                            <div className='flex-col w-full h-2/4 z-10 pt-10 space-y-3 space drop-shadow p-20'>
                                <h1 className='text-5xl font-black whitespace-nowrap pb-5'>Front-end React Developer</h1>
                                <p className='text-2xl'>Hello there traveler I'm Matúš Vytykáč aspiring Front-end developer from Slovakia.</p>
                                <p className='text-2xl'>I also dabble in 3D designs sorcery</p>
                                <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                                    <i className='fa fa-linkedin-square text-2xl'/>
                                </Link>
                                <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                                    <i className='fa fa-github-square text-2xl'/>
                                </Link>
                            </div>
                            <div className='w-full h-2/4 z-20 pt-20'>
                                <HeroSkillMesh/>
                            </div>
                        </div>


                        <figure className='w-2/4 h-1/4 z-10' >
                            <HeroMesh/>
                        </figure>
                    </div>
                </div>
        </section>
    );
}
export default Hero;