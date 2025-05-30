
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from "./../../context/CartProvider";

function QuantityInputItem({ item, binIcon }) {
    const { modifyQuantity, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
    const [localQty, setLocalQty] = useState(item.quantity.toString());

    useEffect(() => {
        setLocalQty(item.quantity);
    }, [item.quantity]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === '' || (/^\d$/.test(value) && Number(value) <= 3)) {
            setLocalQty(value);
        }
    };

    const commitChange = () => {
        const value = parseInt(localQty);
        if (value === 0) {
            removeFromCart(item.id);
        } else if (!isNaN(value) || localQty !== '') {
            modifyQuantity(value, item.id);
        } else {
            setLocalQty(1)
            modifyQuantity(1, item.id);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    return (
        <>
            <li key={item.id} className="relative bg-white rounded-2xl p-4 shadow hover:shadow-md transition-shadow duration-200 flex gap-4 items-center">
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-3 right-3 bg-red-400 hover:bg-red-500 p-2 rounded-md transition-colors">
                    <img className="w-4 h-4" src={binIcon} alt="delete" />
                </button>
                <img className="h-20 w-20 object-contain" src={item.image} alt={item.title} />
                <div className="flex flex-col flex-grow">
                    <p className="font-semibold text-gray-800 mb-2">{item.title}</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-200 rounded-md px-2 py-1">
                            <button
                                onClick={() => decrementQuantity(item.id)}
                                className="w-7 h-7 bg-purple-200 text-purple-700 font-bold rounded hover:bg-purple-300 transition">
                                −
                            </button>
                            <input
                                type="text"
                                min="0"
                                max="3"
                                value={localQty}
                                onChange={handleChange}
                                onBlur={commitChange}
                                onKeyDown={handleKeyDown}
                                className="w-10 text-center border-none outline-none bg-transparent"
                            />
                            <button
                                onClick={() => incrementQuantity(item.id)}
                                className="w-7 h-7 bg-indigo-200 text-indigo-700 font-bold rounded hover:bg-indigo-300 transition">
                                +
                            </button>
                        </div>
                        <p className="text-sm text-gray-700 font-medium">
                            {(item.price * item.quantity).toFixed(2)} Kč
                        </p>
                    </div>
                </div>
            </li>
        </>
    );
}

export default QuantityInputItem;