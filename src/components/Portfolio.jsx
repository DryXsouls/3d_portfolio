import React from 'react';
import {Link} from 'react-router-dom';
import WolfCapePage from './assets/WolfCape_Page.png';
import DriftMotionPage from './assets/DriftSlideMotion.png';
import PortfolioPage from './assets/PortfolioPage.png';
import WolfCapeMesh from "./WolfCapeMesh.jsx";
import PortfolioMesh from "./PortfolioMesh.jsx";
import DriftMesh from "./DriftMesh.jsx";


function Portfolio(){
    return(
        <section className='p-2 w-full h-fit lg:p-20' id='portfolio'>
            <article className='w-full h-2/4 pb-10 overflow-hidden'>
                <h5 className='font-bold text-white text-3xl'>Portfolio</h5>
                <h1 className='font-black text-5xl lg:text-6xl'>Each project is unique and designed for business in mind</h1>
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
                            <p className='text-3xl font-normal'>An online Wolfcape Studio page that informs studio fans about the progress of their games in development with an option of buying the game through the steam.</p>
                        </article>
                        <div className='w-full h-2/4 flex gap-x-10'>
                            <WolfCapeMesh/>
                        </div>
                    </div>
                </article>

                <article className='flex flex-col gap-x-2 lg:flex-row-reverse'>
                    <Link className='w-full lg:w-2/4' to='https://wolfcape.netlify.app/' >
                        <figure className='w-full h-full flex-1 p-2 border-r-4 border-black rounded-md'>
                            <img src={DriftMotionPage} alt='WolfCape Page' className='h-full flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col h-full lg:w-2/4'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-5xl font-black text-pink-500 pb-5'>DriftMotion</h2>
                            <p className='text-3xl font-normal'>Lore ipsum lore ipsum Lore ipsum lore ipsumLore ipsum lore ipsum Lore ipsum lore ipsumLore ipsum lore ipsum Lore ipsum lore ipsum</p>
                        </article>
                        <div className='w-full h-2/4'>
                            <DriftMesh/>
                        </div>

                    </div>
                </article>

                <article className='flex flex-col gap-x-2 lg:flex-row'>
                    <Link className='lg:w-2/4' to='https://portfoliomvdesign.netlify.app/' >
                        <figure className='w-full h-full flex-1 p-2 border-l-4 border-black rounded-md'>
                            <img src={PortfolioPage} alt='3D Modeling Portfolio' className='h-full flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col h-full lg:w-2/4'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-5xl font-black text-slate-300 pb-5'>My 3D Modeling Portfolio</h2>
                            <p className='text-3xl font-normal'>You can check out my 3D preview here: I worked on vehicles, buildings, weapons, assets, products, characters I have models in sci-fi, fantasy, historical genres.</p>
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