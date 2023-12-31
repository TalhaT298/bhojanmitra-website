import React, { useEffect, useRef, useState } from 'react';
import logo from '../Header/logo.png';
import { Sling as Hamburger } from 'hamburger-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { GiCampingTent } from 'react-icons/gi';
import { FaQuestionCircle } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from 'react-icons/md';

const Header = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    // console.log(refresh)

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)

    // useEffect(() => {
    if (location?.pathname?.includes('/privacy-policy') && location?.hash) {
        // console.log('inside useEffect')
        navigate('/')
    }
    // }, [refresh, location.hash])

    return (
        <div className='w-full max-w-7xl mx-auto absolute top-8 left-0 right-0 z-50'>
            <div className='flex items-center justify-between px-4 2xl:px-0'>
                <div className='flex items-center gap-2'>
                    <div className='mb-2 w-fit relative'>
                        <img className='h-12 mx-auto object-contain pt-2' src={logo} alt="navbar-logo" />
                    </div>
                    <Link to="/" className='font-bold text-2xl text-black-100'>Bhojan Mitra</Link>
                </div>

                <ul className={`sm:flex items-center flex-col absolute duration-700 justify-center font-popins sm:static sm:flex-row sm:justify-end sm:w-auto hidden`}>
                    <li className='mr-3'>
                        <a
                            onClick={() => setRefresh(!refresh)}
                            className='text-black-100 font-light text-base' href={`#feature`}>Features</a>
                    </li>
                    <li className='mr-3'>
                        <a
                            onClick={() => setRefresh(!refresh)}
                            className='text-black-100 font-light text-base' href="#app">App Launch</a>
                    </li>
                    <li className='mr-3'>
                        <a
                            onClick={() => setRefresh(!refresh)}
                            className='text-black-100 font-light text-base' href="#aashram">Campaign</a>
                    </li>
                    <li className='mr-3'>
                        <Link to={'privacy-policy'}
                            className='text-black-100 font-light text-base'>Privacy</Link>
                    </li>
                    <li className=''>
                        <a
                            onClick={() => setRefresh(!refresh)}
                            className='text-black-100 font-light text-base' href="#faq">FAQ</a>
                    </li>
                </ul>


                {/* sidebar */}
                <ul className={`sm:hidden w-[50%] h-[100vh] bg-black-100 p-5 -top-8 absolute duration-1000 ease-in-out ${show ? 'left-0' : '-left-1/2'}`}>
                    <h3 className='text-3xl font-semibold text-white mb-5 font-ibm uppercase tracking-widest'>Bhojan Mitra</h3>
                    <li className='mb-3'>
                        <a className='text-white font-semibold text-base flex items-center gap-2' href="#feature">
                            <MdOutlineFeaturedPlayList />
                            Features</a>
                    </li>
                    <li className='mb-3'>
                        <a className='text-white font-semibold text-base flex items-center gap-2' href="#app">
                            <AiOutlineAppstoreAdd />
                            App Launch</a>
                    </li>
                    <li className='mb-3'>
                        <a className='text-white font-semibold text-base flex items-center gap-2' href="#aashram">
                            <GiCampingTent />
                            Campaign</a>
                    </li>
                    <li className='mb-3'>
                        <Link to={'privacy-policy'} className='text-white font-semibold text-base flex items-center gap-2'>
                            <MdOutlinePrivacyTip />
                            Privacy</Link>
                    </li>
                    <li className=''>
                        <a className='text-white font-semibold text-base flex items-center gap-2' href="#faq">
                            <FaQuestionCircle />
                            Faq</a>
                    </li>

                    <div className='absolute w-full left-0 right-0 bottom-10 text-center'>
                        <h3 className='font-popins font-bold text-white text-center text-xl'>Let&apos;s Start!</h3>
                        <p className='text-center font-semibold text-white'>Get in touch with us to work</p>

                        <button className='text-white font-semibold max-w-[150px] w-full rounded-md bg-orange-200'
                        >Contact Us</button>
                    </div>
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