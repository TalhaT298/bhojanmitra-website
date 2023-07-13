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
    const [show, setShow] = useState(false)

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
        <section id='aashram' className='px-5 sm:py-32 md:py-5 relative'>
            <div className='w-full max-w-7xl mx-auto relative text-center font-popins'>
                <div>
                    <h2 className='text-3xl sticky top-6 sm:text-5xl md:leading-tight mb-3 sm:mb-5 font-bold text-black-100'>Aashram Connect</h2>
                </div>
                <div style={{ backgroundColor: 'rgba(249, 219, 22, 0.08)', transition: 'all 1000ms ease-in-out' }}>
                    <div className='flex items-center justify-center'>
                        <button
                            onClick={gotoPrevious}
                            className='absolute left-5 text-gray-500 cursor-pointer z-50'>
                            <SlArrowLeft className='text-4xl' />
                        </button>
                        <div className='w-full h-[550px] flex items-center justify-center gap-5 px-5'>
                            {images?.map((image, index) =>
                                < img
                                    key={image.src}
                                    src={image?.src}
                                    className={`rounded-md transition-opacity absolute duration-1000 ease-in-out w-full max-w-xl object-cover ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                    alt={image?.alt}
                                    style={{ height: '500px' }}
                                />)}
                        </div>
                        <button
                            onClick={goToNext}
                            className='absolute right-5 text-gray-500 cursor-pointer z-50'>
                            <SlArrowRight className='text-4xl' />
                        </button>
                    </div>
                    <div className='flex items-center justify-center mb-5'>
                        {
                            contents?.map((_, index) => <p
                                key={index}
                                className={`w-3 h-3 mr-2 rounded-full ${currentIndex === index ? 'bg-red-400' : 'bg-slate-700'}`}
                            ></p>)
                        }
                    </div>
                    {
                        show ?
                            <div className=''>
                                <p className="text-black-100 mb-5 text-lg first-letter:text-7xl text-justify first-letter:float-left first-letter:mr-1 first-letter:font-semibold leading-loose transition duration-700 ease-in-out">
                                    Vanavasi Kalyan Ashram witnessed an awe-inspiring connect and awareness session, showcasing the profound impact of our revolutionary app, Bhojan Mitra. Designed to combat food waste while forging meaningful connections between generous donors and those in need, the event served as a beacon of hope and collaboration. The prestigious occasion was graced by esteemed individuals including the Director of the Department of Health Services, the Principal of Dr. Bhimrao Ambedkar Institute of Technology, and an array of other distinguished officials. Their presence attested to the importance and significance of Bhojan Mitra in transforming the lives of countless individuals, ensuring that no one goes hungry while simultaneously fostering a spirit of compassion and unity within society.
                                </p>
                                <p className='text-lg text-black-100 text-justify'>
                                    As the session unfolded, hearts were opened, minds were enlightened, and a collective commitment was forged to alleviate the plight of the underprivileged through the power of technology and human empathy. Together, we embarked on a journey toward a more sustainable and compassionate future, where no meal is wasted, and every person's hunger is satiated with dignity and respect.{''}
                                    <span
                                        onClick={() => setShow(!show)}
                                        className='cursor-pointer text-blue-600 font-medium'> Read Less...</span>
                                </p>
                            </div> :
                            <div>
                                <p className="text-black-100 mb-5 text-lg first-letter:text-7xl text-justify first-letter:float-left first-letter:mr-1 first-letter:font-semibold leading-loose">Vanavasi Kalyan Ashram witnessed an awe-inspiring connect and awareness session, showcasing the profound impact of our revolutionary app, Bhojan Mitra.{' '}

                                    <span
                                        onClick={() => setShow(!show)}
                                        className='cursor-pointer text-blue-600 font-medium'>Read More...</span>
                                </p>

                            </div>
                    }
                </div>
            </div>

        </section>
    );
};

export default Ashram;

