import React from "react";
import {Link} from "react-router-dom";
import HeroMesh from "./HeroMesh.jsx";
import HeroSkillMesh from "./HeroSkillMesh.jsx";

function Hero(){
    return(
        <section className='p-20 w-screen h-screen'>
                <div className='flex bg-white-500 overflow-hidden'>
                    <div className='flex-col w-2/4 h-2/4 pt-20 content-evenly space-y-3 space-x-1 relative'>
                        <h1 className='text-5xl font-black whitespace-nowrap pb-5'>Front-end React Developer</h1>
                        <p className='text-2xl'>Hello there traveler I'm Matúš Vytykáč aspiring Front-end developer from Slovakia.</p>
                        <p className='text-2xl'>I also dabble in 3D designs sorcery</p>

                        <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                        <i className='fa fa-linkedin-square text-2xl'/>
                        </Link>
                        <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                            <i className='fa fa-github-square text-2xl'/>
                        </Link>


                        <div className='absolute w-4/5 top-20 z-40'>
                            <HeroSkillMesh/>
                        </div>
                    </div>
                    <div className='w-2/4 h-1/4 z-10 drop-shadow' >
                        <HeroMesh className='drop-shadow'/>
                    </div>
                </div>
        </section>
    );
}
export default Hero;