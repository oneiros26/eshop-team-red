import React, { createContext, useContext, useState, useEffect } from 'react'
import { DataContext } from './DataProvider.jsx';

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [localQty, setLocalQty] = useState(null);
    const productsAvailable = useContext(DataContext);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity || 0), 0);
        setTotalPrice(Math.round(total * 10) / 10);
    }, [cartItems]);

    function addToCart(id) {

        const product = productsAvailable.find(product => product.id === id);

        if (!product) {
            console.log('Invalid product')
            return;
        }

        if (cartItems.some(item => item.id === product.id))
            incrementQuantity(product.id);
        else
            setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }

    function removeFromCart(id) {
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    function incrementQuantity(id) {
        const item = cartItems.find(item => item.id === id);

        if (item.quantity < 3) {
            setCartItems((prev) =>
                prev.map(prevItem =>
                    prevItem.id === item.id
                        ? { ...prevItem, quantity: prevItem.quantity + 1 }
                        : prevItem
                )
            );
        }
    }

    function decrementQuantity(id) {
        const item = cartItems.find(item => item.id === id);

        if (item.quantity > 1) {
            setCartItems((prev) =>
                prev.map(prevItem =>
                    prevItem.id === item.id
                        ? { ...prevItem, quantity: prevItem.quantity - 1 }
                        : prevItem
                )
            );
        } else if (item.quantity === 1) {
            removeFromCart(item.id);
        }
    }

    function modifyQuantity(num, id) {
        const newQuantity = num;

        if (isNaN(newQuantity) || newQuantity > 3 || newQuantity < 0)
            console.log('Invalid quantity');
        else if (newQuantity === 0)
            removeFromCart(id)
        else {
            setCartItems((prev) =>
                prev.map(prevItem =>
                    prevItem.id === id
                        ? { ...prevItem, quantity: newQuantity }
                        : prevItem
                )
            );
        }
    }

    return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, modifyQuantity, totalPrice }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider