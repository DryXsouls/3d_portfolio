import React from "react";
import HobbyMesh from "./HobbyMesh.jsx";
import AboutMesh from "./AboutMesh.jsx";

function About(){
    return(
        <section className='p-2 w-full h-fit pb-40 md:p-5 lg:p-20' id='about'>
            <div className='overflow-hidden w-full'>
                <div className='flex flex-col w-full h-fit lg:flex-row lg:h-screen'>
                    <figure className='w-full h-1/2 drop-shadow lg:w-2/4'>
                        <AboutMesh/>
                    </figure>
                    <div className='w-full h-fit flex flex-col lg:w-2/4 lg:h-2/4'>
                        <div className='relative flex-col w-full h-2/4 -top-20 space-y-3 space drop-shadow lg:p-10 lg:p-20'>
                            <h5 className='text-2xl text-white font-bold'>About me</h5>
                            <h1 className='text-5xl font-black'>Junior developer from Slovakia</h1>
                            <p className='text-justify text-2xl font-normal lg:text-2xl'>
                                As a junior front-end developer I posses skills in HTML, CSS, JavaScript, React.
                                I excel in designing responsive Web-sites with help of Figma, Blender and Adobe Photoshop and Illustrator.
                                I’m friendly person who thrives to finish project with his team in best state possible.</p>

                        </div>
                        <div className='relative w-full h-1/4 lg:-top-40 xl:-top-60 lg:h-2/4'>
                            <HobbyMesh/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default About;