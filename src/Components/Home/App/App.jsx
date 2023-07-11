import React, { useState } from 'react';
import imageOne from '../../../../public/assets/images/IMG-20230706-WA0001.jpg'

const App = () => {


    return (
        <section id='app' className='px-5 sm:py-32 md:py-5 relative mb-5'>
            <div className='w-full max-w-7xl mx-auto relative text-center font-popins'>
                <div>
                    <h2 className='text-3xl sm:text-5xl md:leading-tight mb-3 sm:mb-5 font-bold text-black-100 '>App Launch!</h2>
                </div>
                <div style={{ backgroundColor: 'rgba(249, 219, 22, 0.08)' }}>
                    <div className='flex items-center justify-center'>

                        <div className='w-full flex items-center justify-center gap-5 px-5'>

                            <img
                                src={imageOne}
                                className='rounded-md'
                                alt={'app launch image'}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className='mt-5 px-5'>
                        <p className='text-black-100 mb-5 text-lg first-letter:text-7xl text-justify first-letter:float-left first-letter:mr-1 first-letter:font-semibold leading-loose'>
                            Official launch event of the <span className='font-bold'>"Bhojan Mitra"</span> app, an exceptional initiative developed by Unicorniz, a startup company based out of Andaman. The event was honored by the presence of <span className='font-bold'>Shri Azizur Rehman Sir, Ex-Senior Vice Chairperson of PBMC 2022-23 and Councilor of Ward No. 06, State Vice President.</span> As a gesture of appreciation, we commenced the event by felicitating Shri Azizur Rehman Sir with a bouquet
                        </p>
                        <p className='text-lg text-black-100 text-justify mb-5'>
                            Shri Azizur Rehman Sir delivered an insightful address, highlighting the effectiveness of the "Bhojan Mitra" app's solution. He praised the app for its ability to seamlessly connect food donors with those in need, while also actively involving volunteers to ensure an efficient process. Shri Azizur Rehman Sir emphasized the global impact of the app, emphasizing its potential to reduce food waste and make a significant difference in combating hunger. He commended Unicorniz for the selection of their idea to participate in the esteemed Singapore India Hackathon, recognizing the app's innovative approach and its potential for recognition on a global scale.
                        </p>

                        <p className='text-lg text-black-100 text-justify'>
                            With the support and enthusiasm of our partners, volunteers, and the wider community, we are confident that the "Bhojan Mitra" app will have a lasting impact, making a tangible difference in the lives of those in need. Unicorniz is committed to driving positive change and looks forward to the future, where we can collectively tackle food waste and create a world where everyone has access to nutritious meals.

                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default App;