import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import imageOne from '../../../../public/assets/images/IMG-20230710-WA0001.jpg'
import imageTwo from '../../../../public/assets/images/IMG-20230710-WA0002.jpg'
import imageThree from '../../../../public/assets/images/IMG-20230710-WA0004.jpg'
import imageFour from '../../../../public/assets/images/IMG-20230710-WA0005.jpg'
import imageFive from '../../../../public/assets/images/IMG-20230710-WA0006.jpg'
import imageSix from '../../../../public/assets/images/IMG-20230710-WA0007.jpg'
import imageSeven from '../../../../public/assets/images/IMG-20230710-WA0008.jpg';
import imageEight from '../../../../public/assets/images/IMG-20230710-WA0009.jpg';
import imageNine from '../../../../public/assets/images/IMG-20230710-WA0010.jpg';
import imageTen from '../../../../public/assets/images/IMG-20230710-WA0011.jpg';
import imageEleven from '../../../../public/assets/images/IMG-20230710-WA0012.jpg';

const contents = [
    { src: imageOne, alt: 'Image 1' },
    { src: imageTwo, alt: 'Image 2' },
    { src: imageThree, alt: 'Image 3' },
    { src: imageFour, alt: 'Image 4' },
    { src: imageFive, alt: 'Image 5' },
    { src: imageSix, alt: 'Image 6' },
    { src: imageSeven, alt: 'Image 7' },
    { src: imageEight, alt: 'Image 8' },
    { src: imageNine, alt: 'Image 9' },
    { src: imageTen, alt: 'Image 10' },
    { src: imageEleven, alt: 'Image 11' },
];

const Ashram = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }

    const gotoPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    const images = contents?.map((content) => ({
        src: content.src,
        alt: content.alt
    }))
    // console.log(images)
    return (
        <section id='ashram' className='px-5 sm:py-32 md:py-0 relative'>
            <div className='w-full max-w-7xl mx-auto relative text-center font-popins'>
                <div>
                    <h2 className='text-3xl sticky top-6 sm:text-5xl md:leading-tight sm:mb-4 font-bold text-black-100'>Ashram Connect</h2>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <button
                            onClick={gotoPrevious}
                            className='absolute left-5 text-gray-500 cursor-pointer z-50'>
                            <SlArrowLeft className='text-4xl' />
                        </button>
                        <div className='w-full h-[600px] flex items-center justify-center gap-5 px-5' style={{ backgroundColor: 'rgba(249, 219, 22, 0.08)', transition: 'all 1000ms ease-in-out' }}>

                            <img
                                src={images[currentIndex].src}
                                className='rounded-md transition-all duration-700 ease-in-out w-full max-w-xl object-cover'
                                alt={images[currentIndex].alt}
                                style={{ height: '500px' }}
                            />
                        </div>
                        <button
                            onClick={goToNext}
                            className='absolute right-5 text-gray-500 cursor-pointer z-50'>
                            <SlArrowRight className='text-4xl' />
                        </button>
                    </div>
                    <div className='absolute inset-0 flex items-end justify-center'>
                        {
                            contents.map((_, index) => <p
                                key={index}
                                className={`w-3 h-3 mr-2 rounded-full ${currentIndex === index ? 'bg-red-400' : 'bg-slate-700'}`}
                            ></p>)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Ashram;