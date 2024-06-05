import React from 'react';
import {Link} from 'react-router-dom';
import WolfCapePage from './assets/WolfCape_Page.png';
import WolfCapeMesh from "./WolfCapeMesh.jsx";


function Portfolio(){
    return(
        <section className='p-20 mt-40 bg-green-300'>
            <article className='w-full h-2/4 pb-10 border-2 overflow-hidden'>
                <h5 className='font-bold text-blue-600 text-2xl'>Portfolio</h5>
                <h1 className='font-black text-4xl'>Each project is unique and designed for business in mind</h1>
            </article>
            <div className='flex flex-col gap-y-40'>
                    <article className='flex gap-x-2 border-l-4 border-black rounded-md'>
                        <Link className='w-2/4' to='https://wolfcape.netlify.app/ m-10' >
                            <figure className='w-full h-full flex-1 p-2'>
                                <img src={WolfCapePage} alt='WolfCape Page' className='h-full flex-1 w-full rounded-md'/>
                            </figure>
                        </Link>
                        <div className='flex flex-col w-2/4 h-full'>
                            <article className='w-full h-2/4'>
                                <h2 className='text-2xl font-black text-orange-800'>Wolfcape</h2>
                                <p className='text-xl font-normal'>An online Wolfcape Studio page that informs studio fans about the progress of their games in development with an option of buying the game through the steam.</p>
                            </article>
                            <div className='w-full h-2/4'>
                                <WolfCapeMesh/>
                            </div>

                        </div>
                    </article>

                <article className='flex flex-row-reverse gap-x-2 border-r-4 border-black rounded-md'>
                    <Link className='w-2/4' to='https://wolfcape.netlify.app/ m-10' >
                        <figure className='w-full h-full flex-1 p-2'>
                            <img src={WolfCapePage} alt='WolfCape Page' className='h-full flex-1 w-full rounded-md'/>
                        </figure>
                    </Link>
                    <div className='flex flex-col w-2/4 h-full'>
                        <article className='w-full h-2/4'>
                            <h2 className='text-2xl font-black text-orange-800'>Wolfcape</h2>
                            <p className='text-xl font-normal'>An online Wolfcape Studio page that informs studio fans about the progress of their games in development with an option of buying the game through the steam.</p>
                        </article>
                        <div className='w-full h-2/4'>
                            <WolfCapeMesh/>
                        </div>

                    </div>
                </article>






            </div>
        </section>
    );
}

export default Portfolio;