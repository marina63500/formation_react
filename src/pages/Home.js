import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';



const Home = () => {
    return (
       //appel des composents
        <div >
            <Logo />
            <Navigation />
            <Countries />
           
        </div>
    );
};

export default Home;