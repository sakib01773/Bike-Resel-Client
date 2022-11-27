import React from 'react';
import img1 from '../../../assets/Banner/img1.jpg'
import img2 from '../../../assets/Banner/img2.jpg'
import img3 from '../../../assets/Banner/img3.jpg'
import img4 from '../../../assets/Banner/img4.jpg'
import img5 from '../../../assets/Banner/img5.jpg'
import img6 from '../../../assets/Banner/img6.jpg'
import BannerItem from './BannerItem';






const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next:2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next:3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next:4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next:1
    },
]
const Banner = () => {

   
    return (
        <div className="carousel w-full h-[70vh] my-8">


            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
           
           
        </div>
    );
};

export default Banner;