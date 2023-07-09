import React from 'react';

const Contact = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mt-12 sm:mt-32' style={{ backgroundColor: 'rgba(249, 219, 22, 0.08)' }}>
            <div>
                <section className='py-16 px-5 relative overflow-hidden sm:pt-32 w-full max-w-4xl mx-auto'>
                    <div className='mx-auto items-center flex flex-col gap-2 sm:gap-4 w-full max-w-4xl'>
                        <h2 className='text-black-100 text-3xl sm:text-5xl md:leading-tight text-center font-bold'>Bridge the Gap, Nourish with Bhojan Mitra</h2>
                        <div className='mb-16 mt-8 text-center w-full max-w-sm'>
                            <section className='relative'>
                                <h2 className='mb-3 text-2xl sm:text-2xl font-bold md:leading-tight text-black-100'>
                                    Get notified about updates.
                                </h2>
                                <div>
                                    <form action="" className='flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap'>
                                        <input
                                            className='flex-auto rounded-lg border-0 bg-white px-6 py-4 shadow-sm ring-1 ring-black-100 ring-opacity-10 text-slate-900 text-base focus:ring-2 w-full focus:outline-none focus:ring-black-100
                                            focus:ring-opacity-10 sm:text-xl sm:leading-6'
                                            type="email"
                                            placeholder='Enter Your Email'
                                            name="email" id="email" />
                                        <input
                                            className='rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white bg-orange-200'
                                            type="submit" value="Notify me." />
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;