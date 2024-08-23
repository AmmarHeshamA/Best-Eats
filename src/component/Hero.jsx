import React from 'react';
import img4 from '/src/assets/pexels-photo-1640774.png';


function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        {/* OverLay */}
        <div className='max-h-[500px] relative'>
            <div className='absolute h-full w-full max-h-[500px] flex flex-col justify-center
            text-gray-200 bg-black/30'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods </span>Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={img4} alt="" />
        </div>
    </div>
  )
}

export default Hero