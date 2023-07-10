import React from 'react';
import logo from '../Header/logo.png'


const Header = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <nav>
                <div className="flex flex-wrap justify-between py-2">
                    <div className="flex ">
                       <a href=""> <img className='w-[72px] h-16 ' src={logo} alt="" /></a>
                       <p className='text-2xl font-semibold pt-5' >Bhojan Mitra</p>
                    </div>
                    <div className="">
                       
                    </div>
                    <div className="">
                    <ul className='flex flex-wrap mt-3'>
                            
                            <li className='mx-3'><a href="">Features</a> </li>
                            <li className='mx-3'><a href="">FAQ</a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;