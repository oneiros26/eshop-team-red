
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from "./../../../context/CartProvider";

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
        <li key={item.id} className="bg-white rounded-lg p-3 flex items-center justify-between hover:shadow-md transition-shadow duration-200 relative">
            <img className="h-14 w-auto rounded mr-3" src={item.image} alt="product image" />
            <p className="text-right font-semibold text-gray-700 whitespace-nowrap">{(item.price * item.quantity).toFixed(2)} Kč</p>
            <div className="flex gap-3 ml-auto">
                <div className="ml-auto flex items-center gap-1">
                    <button onClick={() => incrementQuantity(item.id)} className="w-6 h-6 bg-indigo-200 text-indigo-700 text-lg font-semibold rounded hover:bg-indigo-300 transition-colors flex items-center justify-center">+</button>
                    <input
                        type="text"
                        min="0"
                        max="3"
                        value={localQty}
                        onChange={handleChange}
                        onBlur={commitChange}
                        onKeyDown={handleKeyDown}
                        className="w-8 text-center border border-gray-300 rounded outline-none focus:ring-1 focus:ring-black no-spinner"
                    />
                    <button onClick={() => decrementQuantity(item.id)} className="w-6 h-6 bg-purple-200 text-purple-700 text-lg font-semibold rounded hover:bg-purple-300 transition-colors flex items-center justify-center">-</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-400 rounded-md p-1 hover:bg-red-500 transition-colors">
                    <img className="w-4" src={binIcon} alt="delete" />
                </button>
            </div>
        </li>
    );
}

export default QuantityInputItem;
