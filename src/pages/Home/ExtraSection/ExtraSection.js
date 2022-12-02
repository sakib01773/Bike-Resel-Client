import React from 'react';

const Extrasection = () => {
    return (

        <div>

            <h1 className='text-5xl text-center font-bold my-20 text-dark'>Our Best Bikes</h1>
            <div className='container mx-auto my-20 grid lg:grid-cols-2 gap-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5 ">
                    <figure><img className='w-96' src="https://www.suzuki.com.bd/images/bike_models/preview_images/privew_images__165838537315732.png" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">Suzuki Bike</h2>
                        <p>Price: 12000 taka</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                    <figure><img className='w-96' src="https://www.rushlane.com/wp-content/uploads/2020/10/yamaha-fzs-fi-bluetooth-launch-2-1200x900.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">FZS bike</h2>
                        <p>Price: 100000 taka</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                    <figure><img className='w-96' src="https://www.banglamotor.net/images/bajaj/bajaj-pulsar-150-img03.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl"> Pulsur bike
                        </h2>
                        <p>Price: 180000 taka</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                    <figure><img className='w-96' src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2023/4dc57ed5-4a65-4963-a2d6-afd571510f59.png" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">yamaha bike
                        </h2>
                        <p>Price: 150000 taka </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>



            </div>

        </div>

    );
};

export default Extrasection;