// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../../Redux/Slices/cartSlices';

const Card = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cart = useSelector((state) => state.cart.items);
    console.log(cart);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')  // Replace with your API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.slice(0,25));  // Fetch and limit to 10 products
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);  // Empty dependency array means this effect runs once on mount

    if (loading) return <p className='loader'></p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='container flex items-center justify-center flex-col'>
            <h1 className='text-3xl text-[#00509e] font-bold mb-4'>Popular Products</h1>
            <div className='grid grid-cols-4 gap-6'>
                {data.map((item) => (
                    <div key={item.id}
                        className='bg-white shadow-lg p-4 hover:scale-105 duration-300 hover:shadow-2xl h-[250px] w-[250px] relative'>
                        <Link to={`/product/${item.id}`}>
                            <img src={item.images[0]} alt="" className='w-full h-[70%]' />
                        </Link>
                        <h1 className=' font-semibold'>{item.title}</h1>
                        <p className='text-lg font-semibold text-red-600'>${item.price}</p>
                        <button className='bg-[#00509e] text-white px-3 py-1 absolute top-[85%] right-2 outline-none'
                            onClick={() => handleAddToCart(item)}>Add</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
