import React from "react";
import {Link} from "react-router-dom";
import ContactMesh from "./ContactMesh.jsx";
import LinkedInMesh from "./LinkedInMesh.jsx";
import ContactTelephoneMesh from "./ContactTelephoneMesh.jsx";


function Contact(){
    return(
        <section className='p-2 md:p-5 lg:p-20 w-full h-fit' id='contact'>
                <article className='flex flex-col w-full h-fit overflow-hidden lg:flex-row'>
                    <figure className='h-96 z-10 w-full lg:w-2/4 lg:h-screen drop-shadow'>
                        <div className='h-full w-full lg:h-3/4'>
                            <ContactTelephoneMesh/>
                        </div>
                    </figure>
                    <div className='relative flex-col w-full h-fit pt-10 space-y-1 space lg:w-2/4 drop-shadow'>
                        <h5 className='text-2xl text-white font-bold'>Contact me</h5>
                        <h1 className='text-5xl font-black'>You can get in touch with me through:</h1>
                        <div className='flex flex-col w-full h-full content-center text-center'>

                            <Link className='w-32 h-32 mt-10 rounded-md self-center shadow-lg shadow-black hover:bg-black' to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                                <LinkedInMesh/>
                            </Link>

                            <div className='h-96 w-full lg:h-120'>
                                <ContactMesh/>
                            </div>
                        </div>
                    </div>
                </article>
        </section>

    );
}
export default Contact;