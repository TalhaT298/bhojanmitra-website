import React from 'react';
import Feature from './Feature/Feature';
import Faq from './Faq/Faq';
import Contact from './Contact/Contact';
import Banner from './Banner/Banner';
import App from './App/App';
import Ashram from './Ashram/Ashram';

const Home = () => {
    return (
        <div>
            <Banner />
            <Feature />
            <App />
            <Ashram />
            <Faq />
            <Contact />
        </div>
    );
};

export default Home;