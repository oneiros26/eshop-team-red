import { Link } from "react-router-dom";
import { CartContext } from "./../../../context/CartProvider";
import React, { useContext } from 'react'

function CartSidebar() {

    const { cartItems, incrementQuantity, decrementQuantity, modifyQuantity, removeFromCart } = useContext(CartContext);

    return (
        <div className="fixed top-16 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50">
            <h2 className="text-xl p-4">Your Cart</h2>
            <ul>
                {cartItems.map(item => (<>
                    <li key={item.id}>
                        {item.title}
                        <button onClick={() => incrementQuantity(2)}>Increment</button>
                        <input type="number" min="0" max="3" value={item.quantity} onChange={(e) => modifyQuantity(e, 2)} />
                        <button onClick={() => decrementQuantity(2)}>Decrement</button>
                        <button onClick={() => removeFromCart(2)}>Remove</button>
                    </li>
                </>))}
            </ul >
            <Link to='/cart'>Dále</Link>
        </div>
    )
}

export default CartSidebar