import React from 'react';
import {Link} from 'react-router-dom';
import WolfCapePage from './assets/WolfCape_Page.png';
import DriftMotionPage from './assets/DriftSlideMotion.png';
import PortfolioPage from './assets/PortfolioPage.png';
import WolfCapeMesh from "./WolfCapeMesh.jsx";
import PortfolioMesh from "./PortfolioMesh.jsx";
import DriftMesh from "./DriftMesh.jsx";
import {useTranslation} from "react-i18next";

function Portfolio(){
    const{t}=useTranslation();

    return(
        <section className='p-2 w-full h-fit lg:p-20' id='portfolio'>
            <article className='w-full h-2/4 pb-10 overflow-hidden'>
                <h5 className='font-bold text-white text-3xl'>{t("portfolioHeadline")}</h5>
                <h1 className='font-black text-5xl lg:text-6xl'>{t("portfolioHead")}</h1>
            </article>


            <div className='flex flex-col w-full h-fit gap-y-40'>
                <article className='flex flex-col gap-x-2 w-full   lg:flex-row'>
                    <Link className='w-full lg:w-2/4' to='https://wolfcape.netlify.app/' >
                        <figure className='w-full h-full border-l-4 border-black rounded-md flex-1 p-2'>
                            <img src={WolfCapePage} alt='WolfCape Page' className='h-full object-fit flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col w-full lg:w-2/4 h-full'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-5xl font-black text-orange-800 pb-5'>Wolfcape</h2>
                            <p className='text-3xl font-normal'>{t("wolfCape")}</p>
                        </article>
                        <div className='w-full h-2/4 flex gap-x-10'>
                            <WolfCapeMesh/>
                        </div>
                    </div>
                </article>

                <article className='flex flex-col gap-x-2 lg:flex-row-reverse'>
                    <Link className='lg:w-2/4' to='https://portfoliomvdesign.netlify.app/' >
                        <figure className='w-full h-full flex-1 p-2 border-r-4 border-black rounded-md'>
                            <img src={PortfolioPage} alt='3D Modeling Portfolio' className='h-full flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col h-full lg:w-2/4'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-5xl font-black text-slate-300 pb-5'>{t("portfolio3D")}</h2>
                            <p className='text-3xl font-normal'>{t("portfolioPar")}</p>
                        </article>
                        <div className='w-full h-2/4 flex gap-x-10'>
                            <PortfolioMesh/>
                        </div>
                    </div>
                </article>






            </div>
        </section>
    );
}

export default Portfolio;