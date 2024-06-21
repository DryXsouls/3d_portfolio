import React from "react";
import HobbyMesh from "./HobbyMesh.jsx";
import AboutMesh from "./AboutMesh.jsx";

function About(){
    return(
        <section className='flex flex-col w-full p-2 gap-x-2 lg:flex-row w-full h-fit pb-10 md:p-5 lg:p-20' id='about'>
            <figure className='w-full h-1/2 drop-shadow lg:w-2/4'>
                <AboutMesh/>
            </figure>

            <div className='w-full h-fit flex flex-col lg:w-2/4 lg:h-2/4'>
                <article className='relative flex-col w-full h-2/4 -top-20 space-y-3 space drop-shadow lg:p-10 lg:p-20'>
                    <h5 className='text-2xl text-white font-bold'>About me</h5>
                    <h1 className='text-5xl font-black'>Junior developer from Slovakia</h1>
                    <p className='text-justify text-2xl font-normal lg:text-2xl'>
                        As a junior front-end developer I posses skills in HTML, CSS, JavaScript, React.
                        I excel in designing responsive Web-sites with help of Figma, Blender and Adobe Photoshop and Illustrator.
                        I’m friendly person who thrives to finish project with his team in best state possible.</p>
                </article>
                <div className='relative flex w-full h-2/4 lg:-top-60 xl: xl:-top-20 2xl:-top-40 lg:h-96'>
                    <HobbyMesh/>
                </div>
            </div>
        </section>
    );
}
export default About;