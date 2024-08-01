// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FcCustomerSupport } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartQuantity = useSelector((state) => state.cart.quantity);

    return (
        <>
            <div className='flex items-center justify-center w-full h-10 bg-[#00509e]'>
                <div className='marquee-container overflow-hidden'>
                    <div className='marquee-content flex space-x-8 text-white'>
                        {/* Messages to be scrolled */}
                        <p className='text-red-600 font-semibold'>Special offer</p>
                        <p className=''>- Receive a 20% Discount on your first Purchase</p>
                        <p className='text-red-600 font-semibold'>New offer</p>
                        <p className=''>- Get a Free Gift with every order</p>
                    </div>
                </div>
            </div>
            <nav className='flex items-center flex-col'>
                <div className='container flex items-center justify-between w-full h-14'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='flex items-center justify-center gap-2'>
                            <FcCustomerSupport className=' size-8' />
                            <p>+91 1234567890</p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <FaLocationCrosshairs className=' size-8 font-semibold' />
                            <p>Delhi, India</p>
                        </div>
                    </div>
                    <div className='font-bold text-[#00509e] '>
                        <Link to="/" className='flex'>
                            <h1 className='text-3xl '>Shop</h1>
                            <h1 className='text-3xl font-bold text-red-600'>Easy</h1>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <FaUserCircle className=' size-8' />
                        <p>
                            <Link to="/login">
                                Login / Register
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='container bg-[#ffe892] w-full h-14 flex items-center justify-between gap-4'>
                    <div className='relative w-1/2'>
                        <input
                            type='text'
                            placeholder='Search..'
                            className='w-full h-10 border-2 border-none pl-2 pr-10 outline-none'
                        />
                        <CiSearch className='absolute right-3 top-3 text-black font-bold ' />
                    </div>
                    <div className='flex items-center gap-6'>
                        <Link to
                            ="/cart">
                        <div className='flex items-center gap-1'>
                            <FaCartArrowDown className='text-2xl text-gray-600' />
                            <p className='text-gray-600'>{cartQuantity}</p>
                        </div>
                        </Link>
                        <div className='flex items-center gap-1'>
                            <CiHeart className='text-2xl text-red-600' />
                            <p className='text-red-600'>8</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='w-full h-14 container mt-2 flex items-center justify-between'>
                <ul className='flex items-center gap-20 '>
                    <li>Shop All</li>
                    <li>Shoes</li>
                    <li>Furniture</li>
                    <li>Cloths</li>
                    <li>Electronics</li>
                    <li>More</li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
