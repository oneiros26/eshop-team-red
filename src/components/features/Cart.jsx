import { Link } from "react-router-dom";
import { CartContext } from "./../../context/CartProvider";
import React, { useContext } from 'react'
import cartIconOpen from "./../../assets/icons/cartIconOpen.png";
import binIcon from "./../../assets/icons/binIcon.png";
import QuantityInput from "./QuantityInput";

function Cart() {

    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className="p-6 min-h-screen bg-gray-100 pt-16">
            {cartItems.length !== 0
                ? (<div className="flex gap-3 items-center mb-5 mt-2"><h2 className="text-gray-700 text-xl font-semibold p-4">Obsah košíku</h2><p>&#40; {cartItems.length} zboží &#41;</p></div>)
                : (<div className="absolute inset-0 items-center justify-center flex flex-col gap-5"><img className="w-1/6 opacity-50" src={cartIconOpen} alt="cart Icon" /><h2 className="text-gray-500 text-base font-semibold mb-7">Váš košík je prázdný</h2><Link to='/all-products' className="w-[220px] bg-blue-300 hover:bg-blue-400 text-white font-semibold text-center rounded py-3 transition-colors z-12">Zobrazit produkty</Link></div>
                )}
            < ul className="flex flex-col gap-4 w-1/2" >
                {cartItems.map(item => (
                    <QuantityInput key={item.id} item={item} binIcon={binIcon}></QuantityInput>
                ))}
            </ul >
            {cartItems.length !== 0 &&
                <div className="fixed top-[calc(50%+2rem)] right-[11%] transform -translate-y-1/2 bg-white w-[30%] h-[40%] rounded-3xl shadow-md p-6 flex flex-col justify-center min-h-[308px]">
                    <div className="flex justify-between mb-4 text-lg font-medium">
                        <p>Cena</p>
                        <p>{totalPrice.toFixed(2)} Kč</p>
                    </div>
                    <div className="flex justify-between mb-4 text-lg font-medium">
                        <p>DPH (21%)</p>
                        <p>{(totalPrice * 0.21).toFixed(2)} Kč</p>
                    </div>
                    <div className="flex justify-between pt-4 mt-4 border-t text-xl font-semibold">
                        <p>Celkem k platbě</p>
                        <p>{(totalPrice * 1.21).toFixed(2)} Kč</p>
                    </div>
                    <Link to='/checkout/step-1' className="self-center mt-10 w-[50%] bg-green-400 hover:bg-green-500 text-white font-semibold text-base text-center rounded py-3 transition-colors z-12">Pokračovat k platbě</Link>
                </div>
            }
        </div>
    )
}

export default Cart