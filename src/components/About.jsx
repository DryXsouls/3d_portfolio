import React from "react";
import HeroMesh from "./HeroMesh.jsx";

function About(){
    return(
        <section className='p-20'>
            <div className=' bg-red-400'>
                <div className='flex'>
                    <figure>
                        <HeroMesh/>
                    </figure>
                    <div className='about-text'>
                        <h5 className='color: red'>About me</h5>
                        <h2>Junior developer from Slovakia</h2>
                        <p>As a junior front-end developer
                            I posses skills in HTML, CSS, JavaScript, React. I excel in designing responsive Web-sites with help of Figma, Blender and Adobe Photoshop and Ilustrator.
                            I’m friendly person who thrives to finish project with his team in best state possible.</p>
                    </div>
                </div>
                <div>
                    <HeroMesh/>
                </div>
            </div>
        </section>

    );
}
export default About;