import React from "react";
import {Link} from "react-router-dom";
import HeroMesh from "./HeroMesh.jsx";
import HeroSkillMesh from "./HeroSkillMesh.jsx";

function Hero(){
    return(
        <section className='p-2 w-screen h-fit lg:h-screen lg:p-20' id='hero'>
                <div className='overflow-hidden'>
                    <div className='flex flex-col-reverse w-full h-screen pt-20 lg:flex-row'>
                        <div className='flex flex-col w-full h-fit lg:w-2/4 lg:h-2/4'>
                            <div className='flex-col w-full h-2/4 p-2 pt-10 space-y-3 space drop-shadow lg:2/4 lg:p-20'>
                                <h1 className='text-5xl font-black text-white  pb-5 lg:whitespace-nowrap'>Front-end React Developer</h1>
                                <p className='text-2xl'>Hello there traveler I'm Matúš Vytykáč aspiring Front-end developer from Slovakia.</p>
                                <p className='text-2xl'>I also dabble in 3D designs sorcery</p>
                                <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                                    <i className='fa fa-linkedin-square text-2xl'/>
                                </Link>
                                <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                                    <i className='fa fa-github-square text-2xl'/>
                                </Link>
                            </div>
                            <div className='w-full h-2/4 lg:pt-20 lg:h-2/4'>
                                <HeroSkillMesh/>
                            </div>
                        </div>


                        <figure className='w-full h-full lg:w-2/4 lg:h-1/4' >
                            <HeroMesh/>
                        </figure>
                    </div>
                </div>
        </section>
    );
}
export default Hero;