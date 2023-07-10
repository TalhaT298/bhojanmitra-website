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

const images = [
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
const App = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3)

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const pages = [...Array(totalPages).keys()];

    const nextImages = () => {
        const newIndex = startIndex + 3;
        setStartIndex(newIndex < images.length ? newIndex : 0)
    };

    const previousImages = () => {
        const newIndex = startIndex - 3;
        if (newIndex >= 0) {
            setStartIndex(newIndex);
        }
        else {
            setStartIndex(images.length - 2);
        }
    };

    const displayedImages = images.slice(startIndex, startIndex + 3);

    return (
        <section id='app' className='px-5 sm:py-32 relative'>
            <div className='w-full max-w-7xl mx-auto relative text-center font-popins'>
                <div>
                    <h2 className='text-3xl sticky top-6 sm:text-5xl md:leading-tight sm:mb-4 font-bold text-black-100'>App Lunch</h2>
                </div>
                <div>
                    <div className='flex items-center justify-center transition-all duration-1000 ease-in-out'>
                        <button
                            onClick={previousImages}
                            className='absolute left-5 text-gray-500 cursor-pointer z-50'>
                            <SlArrowLeft className='text-4xl' />
                        </button>
                        <div className='w-full h-[600px] flex items-center justify-center gap-5 px-5' style={{ backgroundColor: 'rgba(249, 219, 22, 0.08)', transition: 'all 700ms ease-in-out' }}>
                            {displayedImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    className='rounded-md'
                                    alt={image.alt}
                                    style={{ width: '30%', height: '300px' }}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextImages}
                            className='absolute right-5 text-gray-500 cursor-pointer z-50'>
                            <SlArrowRight className='text-4xl' />
                        </button>
                    </div>
                    <div className='absolute inset-0 flex items-end justify-center'>
                        {
                            pages?.map((page, index) => <p
                                key={index}
                                className={`w-3 h-3 mr-2 rounded-full ${startIndex === page * 3 ? 'bg-red-400' : 'bg-slate-700'}`}
                            ></p>)
                        }
                    </div>
                </div>
            </div>

        </section >

    );
};

export default App;