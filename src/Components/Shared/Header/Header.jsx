import React, { useState } from 'react';
import logo from '../Header/logo.png'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';


const Header = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50'>
            <div className='flex items-center justify-between px-5 2xl:px-0'>
                <div className='flex items-center gap-2'>
                    <div className='mb-2 w-fit relative'>
                        <img className='h-12 mx-auto object-contain' src={logo} alt="navbar-logo" />
                    </div>
                    <a href="" className='font-semibold text-2xl text-black-100 hidden sm:block'>Bhojan Mitra</a>
                </div>

                <ul className={`left-0 right-0 flex items-center flex-col absolute duration-700 justify-center font-popins sm:static sm:flex-row sm:justify-end sm:w-auto  ${show ? 'top-[10px]' : '-top-96'}`}>
                    <li className='mr-2'>
                        <a className='text-black-100 font-medium text-base' href="#feature">Feature</a>
                    </li>
                    <li className='mr-2'>
                        <a className='text-black-100 font-medium text-base' href="#app">App Launch</a>
                    </li>
                    <li className='mr-2'>
                        <a className='text-black-100 font-medium text-base' href="#aashram">Aashram Connect</a>
                    </li>
                    <li className='mr-2'>
                        <Link to={'privacy-policy'} className='text-black-100 font-medium text-base' href="#aashram">Privacy</Link>
                    </li>
                    <li className=''>
                        <a className='text-black-100 font-medium text-base' href="#faq">Faq</a>
                    </li>
                </ul>

                <div className='sm:hidden'
                    onClick={() => setShow(!show)}>
                    <Hamburger
                        rounded
                        color='#1e293b'
                        toggled={isOpen}
                        toggle={setIsOpen}></Hamburger>
                </div>

            </div>
        </div>
    );
};

export default Header;