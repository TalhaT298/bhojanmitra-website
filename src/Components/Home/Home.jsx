import React from 'react';
import Feature from './Feature/Feature';
import Faq from './Faq/Faq';
import Contact from './Contact/Contact';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Feature />
            <Faq />
            <Contact />
        </div>
    );
};

export default Home;