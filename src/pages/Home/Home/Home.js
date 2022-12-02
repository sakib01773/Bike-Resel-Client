import React from 'react';
import useTitle from '../../../hocks/useTitles';
import Advertised from '../../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Extrasection from '../ExtraSection/ExtraSection';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Extrasection></Extrasection>
        </div>
    );
};

export default Home;