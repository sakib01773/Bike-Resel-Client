import React from 'react';
import { Link } from 'react-router-dom';
// import './Banner.css'
import './Banneritem.css'
const BannerItem = ({slide}) => {
    const {image, next, prev, id} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-image'>
        <img src={image} alt='' className="w-[100vw] h-full" />
        </div>


        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-1/4">
            <h1 className='text-5xl font-bold text-white'>Two wheels move the soul, <br /> Run the race of your life at your own pace.</h1>
        </div>

        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-2/4">
            <Link to={"/"}><button className="btn btn-outline btn-warning">Get Started</button></Link>
        </div>

        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerItem;