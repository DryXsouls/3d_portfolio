import React from "react";
import HobbyMesh from "./HobbyMesh.jsx";
import AboutMesh from "./AboutMesh.jsx";
import {useTranslation} from "react-i18next";

function About(){
    const {t} = useTranslation();
    return(
        <section className='flex flex-col w-full p-2 gap-x-2 lg:flex-row w-full h-fit pb-10 md:p-5 lg:p-20' id='about'>
            <figure className='w-full h-1/2 drop-shadow lg:w-2/4'>
                <AboutMesh/>
            </figure>

            <div className='w-full h-fit flex flex-col lg:w-2/4 lg:h-2/4'>
                <article className='relative flex-col w-full h-2/4 -top-20 space-y-3 space drop-shadow lg:p-10 lg:p-20'>
                    <h5 className='text-2xl text-white font-bold'>{t("aboutHeadline")}</h5>
                    <h1 className='text-5xl font-black'>{t("aboutHead")}</h1>
                    <p className='text-justify text-2xl font-normal lg:text-2xl'>{t("aboutParagraph")}</p>
                </article>
                <div className='relative flex w-full h-2/4 lg:-top-60 xl: xl:-top-20 2xl:-top-40 lg:h-96'>
                    <HobbyMesh/>
                </div>
            </div>
        </section>
    );
}
export default About;