import React from "react";
import HobbyMesh from "./HobbyMesh.jsx";
import AboutMesh from "./AboutMesh.jsx";

function About(){
    return(
        <section className='p-20 w-screen h-screen' id='about'>
            <div className='overflow-hidden w-full'>
                <div className='flex w-full h-screen'>
                    <figure className='w-2/4 h-1/4 z-10 drop-shadow'>
                        <AboutMesh/>
                    </figure>
                    <div className='w-2/4 h-1/4 flex flex-col'>
                        <div className='flex-col w-full h-2/4 z-10 pt-10 space-y-3 space drop-shadow p-20'>
                            <h5 className='text-2xl text-blue-600 font-bold'>About me</h5>
                            <h1 className='text-5xl font-black'>Junior developer from Slovakia</h1>
                            <p className='text-justify text-2xl font-normal pb-20 '>
                                As a junior front-end developer I posses skills in HTML, CSS, JavaScript, React.
                                I excel in designing responsive Web-sites with help of Figma, Blender and Adobe Photoshop and Illustrator.
                                I’m friendly person who thrives to finish project with his team in best state possible.</p>

                        </div>
                        <div className='w-full h-2/4'>
                            <HobbyMesh/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default About;