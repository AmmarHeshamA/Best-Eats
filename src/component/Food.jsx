import React, { useState } from 'react'
import { data } from '../Data/data'
function Food() { 
    // console.log(data)
    const [foods,setFood] = useState(data)

    // filter type burgers/pizza/etc

    const filtertype = (category) =>{
        setFood(
            data.filter((item)=>{

                return(item.category === category) ;
            })
        )
        }
        // Filter price

        const filterprice = (price) =>{
            setFood(
                data.filter((item)=>{
    
                    return(item.price === price) ;
                })
            )
            }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Menu Items</h1>
        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filter type */}
            <div >
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-evenly flex-wrap'>
                    <button onClick={()=>setFood(data)} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>All</button>
                    <button onClick={()=>filtertype('burger')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>Burgers</button>
                    <button onClick={()=>filtertype('pizza')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>Pizza</button>
                    <button onClick={()=>filtertype('salad')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>Salads</button>
                    <button onClick={()=>filtertype('chicken')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>Chicken</button>
                </div>
            </div>
            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-evenly flex-wrap max-w-[400px] w-full'>
                    <button onClick={()=>filterprice('$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>$</button>
                    <button onClick={()=>filterprice('$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>$$</button>
                    <button onClick={()=>filterprice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>$$$</button>
                    <button onClick={()=>filterprice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300'>$$$$</button>
                </div>
            </div>
        </div>
        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {
                foods.map((item,index)=>(
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-xl'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[200px] object-cover rounded-lg rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Food