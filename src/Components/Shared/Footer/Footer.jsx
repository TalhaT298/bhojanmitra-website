import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='max-w-6xl py-10 flex flex-col text-lg px-5 gap-3 sm:gap-8 mx-auto'>
            {/* <div className='flex flex-co sm:flex-row gap-4 justify-center w-full'>
                <div className='flex flex-wrap gap-6'>
                    <Link className='hover:opacity-60 transition text-orange-100' to={'/'}>Instagram</Link>
                    <Link className='hover:opacity-60 transition text-orange-100' to={'/'}>Linkedin</Link>
                </div>
            </div> */}
            <div className='text-sm'>
                <div className='flex flex-col md:flex-row gap-4 justify-center'>
                    <span className='opacity-40'>
                        &copy; 2023 Bridge the Gap, Nourish with Bhojan Mitra All Rights Reserved. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;