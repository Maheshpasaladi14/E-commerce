// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../Redux/Slices/cartSlices';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)  // Replace with your API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className='loader'></p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="container mx-auto p-4">
            {product && (
                <div className="flex items-center w-[80%] h-[80%]  m-auto gap-8">
                   <div className=' w-[40%] h-[40%]'>
                    <img src={product.images} alt={product.title} 
                    className="w-full h-full object-cover"/>
                   </div>
                <div
                    className="w-[60%] h-[40%] flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-lg font-bold mt-2 mb-2  text-red-600">${product.price}</p>
                    <button className="bg-[#00509e] text-white px-3 py-1 outline-none" onClick={handleAddToCart}>Add to Cart</button>
                    <p 
                    className="text-lg font-semibold text-gray-600 mt-4">{product.description}</p>
                </div>
                </div>
            )}
        </div>
    );
};

export default Product;
