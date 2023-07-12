import React, { useState } from 'react';
import logo from '../Header/logo.png'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';


const Header = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full max-w-7xl mx-auto absolute top-8 left-0 right-0 z-50'>
            <div className='flex items-center justify-between px-4 2xl:px-0'>
                <div className='flex items-center gap-2'>
                    <div className='mb-2 w-fit relative'>
                        <img className='h-12 mx-auto object-contain pt-2' src={logo} alt="navbar-logo" />
                    </div>
                    <a href="" className='font-bold text-2xl text-black-100'>Bhojan Mitra</a>
                </div>

                <ul className={`left-0 right-0 flex items-center flex-col absolute duration-700 justify-center font-popins sm:static sm:flex-row sm:justify-end sm:w-auto  ${show ? 'top-[10px]' : '-top-96'}`}>
                    <li className='mr-3'>
                        <a className='text-black-100 font-light text-base' href="#feature">Features</a>
                    </li>
                    <li className='mr-3'>
                        <a className='text-black-100 font-light text-base' href="#app">App Launch</a>
                    </li>
                    <li className='mr-3'>
                        <a className='text-black-100 font-light text-base' href="#aashram">Campaign</a>
                    </li>
                    <li className='mr-3'>
                        <Link to={'privacy-policy'} className='text-black-100 font-light text-base' href="#aashram">Privacy</Link>
                    </li>
                    <li className=''>
                        <a className='text-black-100 font-light text-base' href="#faq">FAQ</a>
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