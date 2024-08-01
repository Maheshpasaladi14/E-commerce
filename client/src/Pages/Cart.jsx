// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../Redux/Slices/cartSlices';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.quantity);
    const totalPrice = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2 text-left">Product</th>
                                <th className="border p-2 text-center">Quantity</th>
                                <th className="border p-2 text-right">Price</th>
                                <th className="border p-2 text-right">Total</th>
                                <th className="border p-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="border p-2 flex items-center">
                                        <Link to={`/product/${item.id}`}>
                                        <img src={item.images} alt={item.title} className="w-12 h-12 mr-2" />
                                        </Link>
                                        <p>{item.title}</p>
                                    </td>
                                    <td className="border p-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button 
                                                className="px-2 py-1 bg-gray-200 hover:bg-gray-300" 
                                                onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                            {item.quantity}
                                            <button 
                                                className="px-2 py-1 bg-gray-200 hover:bg-gray-300" 
                                                onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                        </div>
                                    </td>
                                    <td className="border p-2 text-right">${item.price.toFixed(2)}</td>
                                    <td className="border p-2 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td className="border p-2 text-center">
                                        <button 
                                            className="px-2 py-1 bg-red-500 text-white hover:bg-red-600" 
                                            onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold flex gap-2 ">Total Quantity:<p className='text-red-500'> {totalQuantity}</p> </h2>
                        <h2 className="text-2xl font-bold flex gap-2">Total Price: <p className='text-red-500'> ${totalPrice.toFixed(2)}</p> </h2>
                        <div className=' flex justify-between'>
                        <button 
                            className="px-4 py-2 bg-red-500 text-white mt-4 hover:bg-red-600" 
                            onClick={() => dispatch(clearCart())}>Clear Cart
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white mt-4 hover:bg-red-600">Check Out</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
