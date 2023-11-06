import React from 'react';
import Banner from '../Banner/Banner';
import DailyMenus from '../DailyMenus/Dailymenus';
import AboutAs from '../AboutUs/AboutAs';
import Favorites from '../Favorites/Favorites';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Favorites></Favorites>
            <DailyMenus></DailyMenus>
            <AboutAs></AboutAs>
        </div>
    );
};

export default Home;