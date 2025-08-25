import React from 'react';
import Navbar from '../../common/Navbar';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../../common/Footer';

function HomePage() {
    return ( 
        <>
           <Navbar/>
           <Hero/>
           <Awards/>
           <Stats/>
           <Education/>
           <Pricing/>
           <OpenAccount/>
           <Footer/>
        </>
    );
}

export default HomePage;