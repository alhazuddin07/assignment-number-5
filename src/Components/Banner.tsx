import React from 'react';
import BannerLogo from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className='flex justify-between container mx-auto'>
            <div className=''>
                <h1 className='font-bold text-6xl mt-10 py-9'>Build Your Ideal <br />
                  <span className='bg-linear-to-r from-red-500
                   via-pink-500 to-purple-500 
                   bg-clip-text text-transparent'
                   >Development Stack
                   </span>
                </h1>
                <p className='text-[19px] text-[#475569]'>Explore frontend, backend, database, and tooling options, <br />
                   compare them side by side, and put together the stack that fits your <br /> next project.
                </p>
                <div className='my-13 text-[15px]'>
                    <button
                     className='btn bg-linear-to-r from-[#fa7213] to-[#ec4899] text-white mr-3 px-6 py-4 rounded-md'>
                        Explore Technologies
                    </button>
                    <button className='btn text-[#374151] px-16 py-4 rounded-md'>Learn More</button>
                </div>
            </div>
            <div>
                <img src={BannerLogo} alt="" />
            </div>
        </div>
    );
};

export default Banner;