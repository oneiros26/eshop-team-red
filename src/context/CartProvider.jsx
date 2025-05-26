import React, { createContext, useContext, useState } from 'react'
import { DataContext } from './DataProvider.jsx';

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const productsAvailable = useContext(DataContext);

    function addToCart(id) {
        for (let product of productsAvailable) {
            productsAvailable.find()
            if (product.id === id)
                if (cartItems.some(item => item.id === product.id))
                    changeQuantity(product.id);
                else
                    setCartItems(prev => [...prev, product]);
            else
                console.log('Invalid product')
        }
    }

    function removeFromCart(id) {
        setCartItems(prev => prev.filter(item.id !== id));
    }

    function changeQuantity() {

    }

    return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQuantity }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider