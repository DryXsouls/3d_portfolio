import React from "react";
import HeroMesh from "./HeroMesh.jsx"
import HobbyMesh from "./HobbyMesh.jsx";

function About(){
    return(
        <section className='p-20'>
            <div className='bg-red-400 overflow-hidden'>
                <div className='flex'>
                    <figure className='w-2/4 h-1/4 z-10 w-screen h-px drop-shadow'>
                        <HeroMesh/>
                    </figure>
                    <div className='flex-col w-2/4 h-3/4 z-10 pt-10 space-y-1 space w-screen drop-shadow'>
                        <h5 className='text-sm text-blue-600 font-bold'>About me</h5>
                        <h2 className='text-3xl font-black'>Junior developer from Slovakia</h2>
                        <p className='text-justify text-sm font-normal pb-20 '>
                            As a junior front-end developer I posses skills in HTML, CSS, JavaScript, React.
                            I excel in designing responsive Web-sites with help of Figma, Blender and Adobe Photoshop and Illustrator.
                            I’m friendly person who thrives to finish project with his team in best state possible.</p>
                    </div>
                </div>
                <div className='relative w-full h-half -top-60 -right-56 overflow-hidden'>
                    <HobbyMesh/>
                </div>
            </div>
        </section>

    );
}
export default About;