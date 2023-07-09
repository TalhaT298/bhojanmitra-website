import React from 'react';

const Feature = () => {
    return (
        <section id='feature' className='px-5 py-20 sm:py-32 relative'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='font-popins mb-20 text-center'>
                    <h2 className='text-4xl font-bold text-black-100 md:leading-tight md:text-6xl'>
                        Key Features
                    </h2>
                    <h5 className='text-2xl text-black-100 sm:leading-relaxed'>
                        Discover the benefits of using Bhojan Mitra
                    </h5>
                </div>
                <div className='relative isolate'>
                    <div className='[&>*]:absolute [&>*]>-z-50 [&>*]:-bottom-20 [&>*]:-left-20 [&>*]:w-[50%]'>
                        <svg className="" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1124_1297)">
                                <mask id="mask0_1124_1297"
                                    style={{ maskType: 'luminance' }}
                                    maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
                                    <path d="M200 0H0V200H200V0Z" fill="white"></path>
                                </mask>
                                <g mask="url(#mask0_1124_1297)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 100L4.37114e-06 0L100 4.37114e-06C100 55.2285 55.2285 100 0 100ZM200 100C200 44.7716 155.228 1.88558e-05 100 4.37114e-06V100H0C-4.82822e-06 155.228 44.7715 200 100 200H200V100ZM199.961 100H100V200C100 144.785 144.75 100.021 199.961 100Z" fill="url(#paint0_linear_1124_1297)"></path>
                                </g>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1124_1297" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0509862" stopColor="rgba(249, 22, 41, 0.2)"></stop>
                                    <stop offset="1" stopColor="rgba(204, 249, 22, 0.2)"></stop>
                                </linearGradient>
                                <clipPath id="clip0_1124_1297">
                                    <rect width="200" height="200" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='p-10 flex flex-wrap gap-x-20 gap-y-24 isolate md:p-16 z-50 backdrop-blur-2xl rounded-xl' style={{ backgroundColor: 'rgba(249, 219, 22, 0.08)' }}>
                        <div className='font-popins lg:grow lg:shrink lg:basis-[30%] text-start'>
                            <span className='font-bold text-2xl text-orange-100 mb-2'>01</span>
                            <h3 className='text-2xl font-bold text-black-100 mb-2 md:text-3xl'>Reduce Food Waste</h3>
                            <p className='sm:leading-relaxed text-lg sm:text-xl text-black-100'>
                                Help eliminate food waste by connecting donors with those in need.
                            </p>
                        </div>
                        <div className='font-popins lg:grow lg:shrink lg:basis-[30%] text-start'>
                            <span className='font-bold text-2xl text-orange-100 mb-2'>02</span>
                            <h3 className='text-2xl font-bold text-black-100 mb-2 md:text-3xl'>Easy Donations</h3>
                            <p className='sm:leading-relaxed text-lg sm:text-xl text-black-100'>
                                Donate excess food with just a few clicks through our user-friendly app.
                            </p>
                        </div>
                        <div className='font-popins lg:grow lg:shrink lg:basis-[30%] text-start'>
                            <span className='font-bold text-2xl text-orange-100 mb-2'>03</span>
                            <h3 className='text-2xl font-bold text-black-100 mb-2 md:text-3xl'>Find Nearby Donors</h3>
                            <p className='sm:leading-relaxed text-lg sm:text-xl text-black-100'>
                                Easily locate nearby donors and arrange pickups for donated food.
                            </p>
                        </div>
                        <div className='font-popins lg:grow lg:shrink lg:basis-[30%] text-start'>
                            <span className='font-bold text-2xl text-orange-100 mb-2'>04</span>
                            <h3 className='text-2xl font-bold text-black-100 mb-2 md:text-3xl'>Nourish the Needy</h3>
                            <p className='sm:leading-relaxed text-lg sm:text-xl text-black-100'>
                                Make a positive impact on the community by providing meals to those who need it most.
                            </p>
                        </div>
                        <div className='font-popins lg:grow lg:shrink lg:basis-[30%] text-start'>
                            <span className='font-bold text-2xl text-orange-100 mb-2'>05</span>
                            <h3 className='text-2xl font-bold text-black-100 mb-2 md:text-3xl'>Sustainable Future</h3>
                            <p className='sm:leading-relaxed text-lg sm:text-xl text-black-100'>
                                Contribute to a sustainable future by reducing food waste and promoting sharing.
                            </p>
                        </div>
                        <div className='font-popins lg:grow lg:shrink lg:basis-[30%] text-start'>
                            <span className='font-bold text-2xl text-orange-100 mb-2'>06</span>
                            <h3 className='text-2xl font-bold text-black-100 mb-2 md:text-3xl'>Convenient and Reliable</h3>
                            <p className='sm:leading-relaxed text-lg sm:text-xl text-black-100'>
                                Experience a convenient and reliable platform for food donation and collection.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;