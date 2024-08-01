// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' flex flex-col gap-2 items-center justify-center m-auto h-96 w-[80%] bg-[#c8d9ea]'>
      <h1 className='text-3xl font-bold text-[#00509e]'>Login</h1>
      <div className='flex flex-col gap-2 items-center justify-center w-[50%] h-[80%] bg-white '>
        <input type="text" placeholder='Enter your email' className='border border-[#00509e] px-4 py-2 outline-none '/>
        <input type="text" placeholder='Enter your password' className='border border-[#00509e] px-4 py-2 outline-none '/>
        <button className='bg-[#00509e] text-white px-4 py-1 
         hover:bg-transparent duration-300 hover:text-[#00509e] 
         border-2 border-[#00509e]'>Login</button>
         <div>
         <p className='text-[#00509e]'>Dont have an account? <Link to="/signin" className='text-red-500 text-semibold'>Sign In</Link></p>
         </div>
      </div>
    </div>
  )
}

export default Login