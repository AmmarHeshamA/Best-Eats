import React from 'react'
import img1 from '../src/assets/hamam.png'
import img2 from '../src/assets/7ale.png'
import img3 from '../src/assets/soap.png'

function HeadlineCard() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun Out ,BOGO Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' src={img1} alt="" />
        </div>
        <div className='relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun Out ,BOGO Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' src={img2} alt="" />
        </div>
        <div className='relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun Out ,BOGO Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' src={img3} alt="" />
        </div>
    </div>
  )
}

export default HeadlineCard