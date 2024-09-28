// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/cartSlices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopAll = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success('Item Added to Cart Successfully');
    };

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);  // Fetch all products
                console.log(data);  // Log the fetched data here
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });
    }, []);  // Empty dependency array means this effect runs once on mount

    console.log(data);  // Log the data state after setting it

    if (loading) return <p className='loader'></p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='container mx-auto p-4 flex flex-col items-center justify-center'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <h1 className='text-3xl text-[#00509e] font-bold mb-4'>Popular Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
                {data.map((item) => (
                    <div key={item.id} className='bg-white shadow-lg p-4 hover:scale-105 duration-300 hover:shadow-2xl relative'>
                        <Link to={`/product/${item.id}`}>
                            <img src={item.images[0]} alt={item.title} className='w-full h-[70%] object-cover' />
                        </Link>
                        <h1 className='font-semibold'>{item.title}</h1>
                        <p className='text-lg font-semibold text-red-600'>${item.price}</p>
                        <button 
                            className='bg-[#00509e] text-white px-3 py-1 absolute bottom-2 right-2 outline-none' 
                            onClick={() => handleAddToCart(item)}
                        >
                            Add
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopAll;
