import React from 'react';

const Spiner = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='w-6 h-6 border-2 border-dashed rounded-full animate-spin border-gray-600'></div>
        </div>
    );
};

export default Spiner;