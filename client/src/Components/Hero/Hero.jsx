// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero1 from '../../assets/hero1.jpg'
import Hero2 from '../../assets/hero2.jpg'
import { Link } from 'react-router-dom'


const Hero = () => {

    return (
        <div className=' container w-full h-auto mx-auto flex items-center gap-4'>

            <div className="relative w-[35%] h-96 flex items-center justify-center">
                <img src={Hero1} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
                <div className="absolute inset-0 
                 flex flex-col
                  items-center justify-center text-white">
                    <h1 className="text-2xl font-bold mb-4">Your Content Here</h1>
                    <p className="mb-4">Some additional text or description.</p>
                    <Link to="/products">
                        <button className="bg-[#00509e] hover:bg-transparent duration-300 hover:border-2 border-white
                     text-white font-bold py-2 px-4">Shop Now</button>
                    </Link>
                </div>

            </div>




            <div className="relative w-[65%] h-96 flex items-center justify-center">
                <img src={Hero2} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
                <div className="absolute inset-0 
                 flex flex-col
                  items-center justify-center text-white">
                    <h1 className="text-2xl font-bold mb-4">Your Content Here</h1>
                    <p className="mb-4">Some additional text or description.</p>
                    <Link to="/products">
                        <button className="bg-[#00509e] hover:bg-transparent duration-300 hover:border-2 border-white
                     text-white font-bold py-2 px-4">Shop Now</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Hero