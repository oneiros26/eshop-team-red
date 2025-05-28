import { Link } from "react-router-dom";
import { CartContext } from "./../../context/CartProvider";
import React, { useContext } from 'react'
import cartIconOpen from "./../../assets/icons/cartIconOpen.png";
import binIcon from "./../../assets/icons/binIcon.png";

function Cart() {

    const { cartItems, incrementQuantity, decrementQuantity, modifyQuantity, removeFromCart } = useContext(CartContext);

    return (
        <>
            {cartItems.length !== 0
                ? (<h2 className="text-gray-700 text-xl font-semibold p-4">Váš košík</h2>)
                : (<div className="absolute inset-0 items-center justify-center flex flex-col gap-5"><img className="w-1/3 opacity-50" src={cartIconOpen} alt="cart Icon" /><h2 className="text-gray-500 text-sm font-semibold">Váš košík je prázdný</h2></div>
                )}
            < ul className="flex flex-col gap-3" >
                {
                    cartItems.map(item => (<>
                        <li key={item.id} className="bg-white rounded-lg p-3 flex items-center justify-between hover:shadow-md transition-shadow duration-200">
                            <img className="h-10 w-auto" src={item.image} alt="product image" />
                            <div className="flex gap-2">
                                <div className="flex items-center mr-6">
                                    <button onClick={() => incrementQuantity(item.id)} className="w-6 h-6 bg-indigo-200 text-indigo-700 text-lg font-semibold rounded-md hover:bg-indigo-300 transition-colors flex items-center justify-center p-0">+</button>
                                    <input type="number" min="0" max="3" value={item.quantity} onChange={(e) => modifyQuantity(e, 2)} className="w-8 text-center hover:border border-gray-300 rounded outline-none focus:ring-1 focus:ring-black no-spinner" />
                                    <button onClick={() => decrementQuantity(item.id)} className="w-6 h-6 bg-purple-200 text-purple-700 text-lg font-semibold rounded-md hover:bg-purple-300 transition-colors flex items-center justify-center p-0">-</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-400 rounded-md px-2 py-2 flex items-center content-center hover:bg-red-500 transition-colors"><img className="w-4" src={binIcon} alt="delete" /></button>
                            </div>
                        </li>
                    </>))
                }
            </ul >
        </>
    )
}

export default Cart