// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' w-full bg-[#00509e] h-auto flex items-center justify-evenly'>
       <div className='font-bold '>
                        <Link to="/" className='flex'>
                            <h1 className='text-3xl text-white '>Shop</h1>
                            <h1 className='text-3xl font-bold text-red-600'>Easy</h1>
                        </Link>
                    </div>
      <div className='flex flex-col items-center justify-center h-full p-4'>
        <p className='text-white'>Copyright © 2024. All Rights Reserved.</p>
        <p className='text-white'>Powered by: <span className='text-[#ffe892]'>Codershub</span></p>
        <p className='text-white'>Developed by: <span className='text-[#ffe892]'>Mahesh Pasaladi</span></p>
      </div>
    </div>
  )
}

export default Footer