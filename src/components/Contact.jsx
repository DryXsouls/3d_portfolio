import React from "react";
import {Link} from "react-router-dom";
import ContactMesh from "./ContactMesh.jsx";
import LinkedInMesh from "./LinkedInMesh.jsx";
import ContactTelephoneMesh from "./ContactTelephoneMesh.jsx";


function Contact(){
    return(
        <section className='p-20 w-screen h-screen' id='contact'>
                <article className='flex w-full h-full overflow-hidden'>
                    <figure className='w-2/4 h-full z-10 w-screen drop-shadow'>
                        <ContactTelephoneMesh/>
                    </figure>
                    <div className='flex-col w-2/4 h-full z-10 pt-10 space-y-1 space w-screen drop-shadow'>
                        <h5 className='text-2xl text-white font-bold'>Contact me</h5>
                        <h1 className='text-5xl font-black'>You can get in touch with me through:</h1>
                        <div className='flex flex-col w-full h-full content-center text-center'>

                            <Link className='w-32 h-32  rounded-md self-center shadow-lg shadow-black hover:bg-black' to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                                <LinkedInMesh/>
                            </Link>

                            <div className='h-2/4'>
                                <ContactMesh/>
                            </div>

                        </div>
                    </div>
                </article>
        </section>

    );
}
export default Contact;