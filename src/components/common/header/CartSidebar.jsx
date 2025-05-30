import { Link } from "react-router-dom";
import { CartContext } from "./../../../context/CartProvider";
import React, { useContext } from 'react'
import cartIconOpen from "./../../../assets/icons/cartIconOpen.png";
import binIcon from "./../../../assets/icons/binIcon.png";
import './cartSidebar.css'
import QuantityInputItem from "./QuantityInputItem";

function CartSidebar({ setShowCart }) {

    const { cartItems } = useContext(CartContext);

    return (
        <div className="fixed top-16 bottom-0 w-[30%] right-0 bg-gray-100 shadow-lg z-30 px-4 py-4 flex flex-col">
            {cartItems.length !== 0
                ? (<h2 className="text-gray-700 text-xl font-semibold p-4">Váš košík</h2>)
                : (<div className="absolute inset-0 items-center justify-center flex flex-col gap-5"><img className="w-1/3 opacity-50" src={cartIconOpen} alt="cart Icon" /><h2 className="text-gray-500 text-sm font-semibold">Váš košík je prázdný</h2></div>
                )}
            <ul className="flex flex-col gap-3 flex-1 overflow-y-auto scrollbar-hidden pb-20">
                {cartItems.map(item => (
                    <QuantityInputItem key={item.id} item={item} binIcon={binIcon} />
                ))}
            </ul >
            <div className="bg-white w-full p-4 absolute bottom-0 left-0 flex">
                {cartItems.length !== 0
                    ? < Link to='/cart' onClick={() => setShowCart(false)} className="relative w-full bg-green-400 hover:bg-green-500 text-white font-semibold text-center rounded py-3 transition-colors z-12">Pokračovat</Link>
                    : <button id='noCartItems' className="relative w-full bg-green-300 text-white font-semibold text-center rounded py-3 transition-colors z-12>Pokračovat">Prázdný košík</button>
                }
            </div>
        </div >
    )
}

export default CartSidebar