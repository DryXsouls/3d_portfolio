import React from 'react';
import {Link} from 'react-router-dom';
import WolfCapePage from './assets/WolfCape_Page.png';
import DriftMotionPage from './assets/DriftSlideMotion.png';
import PortfolioPage from './assets/PortfolioPage.png';
import WolfCapeMesh from "./WolfCapeMesh.jsx";


function Portfolio(){
    return(
        <section className='p-20 mt-40 w-screen' id='portfolio'>
            <article className='w-full h-2/4 pb-10 overflow-hidden'>
                <h5 className='font-bold text-white text-3xl'>Portfolio</h5>
                <h1 className='font-black text-6xl'>Each project is unique and designed for business in mind</h1>
            </article>
            <div className='flex flex-col gap-y-40'>
                <article className='flex gap-x-2 border-l-4 border-black rounded-md'>
                    <Link className='w-2/4' to='https://wolfcape.netlify.app/' >
                        <figure className='w-full h-full flex-1 p-2'>
                            <img src={WolfCapePage} alt='WolfCape Page' className='h-full flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col w-2/4 h-full'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-5xl font-black text-orange-800 pb-5'>Wolfcape</h2>
                            <p className='text-3xl font-normal'>An online Wolfcape Studio page that informs studio fans about the progress of their games in development with an option of buying the game through the steam.</p>
                        </article>
                        <div className='w-full h-2/4 flex gap-x-10'>
                            <WolfCapeMesh/>
                        </div>
                    </div>
                </article>

                <article className='flex  flex-row-reverse gap-x-2 border-r-4 border-black rounded-md'>
                    <Link className='w-2/4' to='https://wolfcape.netlify.app/' >
                        <figure className='w-full h-full flex-1 p-2'>
                            <img src={DriftMotionPage} alt='WolfCape Page' className='h-full flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col w-2/4 h-full'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-5xl font-black text-pink-500 pb-5'>DriftMotion-planned</h2>
                            <p className='text-3xl font-normal'>Lore ipsum lore ipsum Lore ipsum lore ipsumLore ipsum lore ipsum Lore ipsum lore ipsumLore ipsum lore ipsum Lore ipsum lore ipsum</p>
                        </article>
                        <div className='w-full h-2/4'>
                            <WolfCapeMesh/>
                        </div>

                    </div>
                </article>
                <article className='flex gap-x-2 border-l-4 border-black rounded-md'>
                    <Link className='w-2/4' to='https://portfoliomvdesign.netlify.app/' >
                        <figure className='w-full h-full flex-1 p-2'>
                            <img src={PortfolioPage} alt='3D Modeling Portfolio' className='h-full flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col w-2/4 h-full'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-5xl font-black text-slate-300 pb-5'>My 3D Modeling Portfolio</h2>
                            <p className='text-3xl font-normal'>Lore ipsum lore ipsum Lore ipsum lore ipsum Lore ipsum lore ipsum Lore ipsum lore ipsum Lore ipsum lore ipsum Lore ipsum lore ipsum Lore ipsum lore ipsum.</p>
                        </article>
                        <div className='w-full h-2/4 flex gap-x-10'>
                            <WolfCapeMesh/>
                        </div>
                    </div>
                </article>






            </div>
        </section>
    );
}

export default Portfolio;