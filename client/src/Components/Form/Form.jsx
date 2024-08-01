// eslint-disable-next-line no-unused-vars
import React from 'react'

const Form = () => {
  return (
    <>
    

    <div className='w-full h-screen flex mt-10 '>
        <div className='container bg-[#ffe892] w-[50%] flex items-center justify-center flex-col gap-4'>
            <h1 className='text-6xl font-bold text-[#00509e] mb-10'>Join with Us</h1>
            <p className='text-sm text-[#00509e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex items-center justify-center gap-4 mt-6'>
                <input type="text" placeholder='Enter your email' className=' px-4 py-2 outline-none '/>
                <button className='bg-[#00509e] text-white px-4 py-2'>Shop Now</button>
            </div>
        </div>

        <div className='bg-[#00509e] w-[50%] flex items-center justify-center'>
            <div className=' bg-white h-[400px] w-[400px] flex items-center justify-center
             flex-col '>
                <h1 className='text-5xl text-[#00509e] font-bold'>Special</h1>
                <h1 className='text-5xl text-[#00509e] font-bold'>Club Offer</h1>
                <hr className='w-[90%] h-1 bg-[#00509e] font-bold text- mt-2' />
                
                <h2>Recieve </h2>
                <h1 className='text-5xl text-[#00509e] font-bold'>20% Descount</h1>
                <h2>on your first purchase</h2>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Form