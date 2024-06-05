import React from "react";
import HeroMesh from "./HeroMesh.jsx"
import HobbyMesh from "./HobbyMesh.jsx";

function About(){
    return(
        <section className='p-20 w-full h-screen'>
            <div className='bg-red-400 overflow-hidden w-full'>
                <div className='flex'>
                    <figure className='w-2/4 h-1/4 z-10 w-screen h-px drop-shadow'>
                        <HeroMesh/>
                    </figure>
                    <div className='flex-col w-2/4 h-3/4 z-10 pt-10 space-y-1 space w-screen drop-shadow'>
                        <h5 className='text-2xl text-blue-600 font-bold'>About me</h5>
                        <h1 className='text-5xl font-black'>Junior developer from Slovakia</h1>
                        <p className='text-justify text-1xl font-normal pb-20 '>
                            As a junior front-end developer I posses skills in HTML, CSS, JavaScript, React.
                            I excel in designing responsive Web-sites with help of Figma, Blender and Adobe Photoshop and Illustrator.
                            I’m friendly person who thrives to finish project with his team in best state possible.</p>
                    </div>
                </div>
                <div className='relative w-6/7 h-4/8 -top-60 -right-56 overflow-hidden'>
                    <HobbyMesh/>
                </div>
            </div>
        </section>

    );
}
export default About;