import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import cartIconClosed from './../../../assets/icons/cartIconClosed.png'
import cartIconOpen from './../../../assets/icons/cartIconOpen.png'
import CartSidebar from './CartSidebar'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);

    function toggleCart() {
        setShowCart(c => !c);
    }

    return (
        <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-6 justify-between'>
            <Link to='/'><img className="h-10 w-auto object-contain" src="https://fullsend.agency/wp-content/uploads/2024/10/ferrari-logo.jpg" alt="logo" /></Link>
            <section></section>
            <nav>
                <ul className="flex items-center gap-6">
                    <li><Link to='/' className="hover:underline">Domov</Link></li>
                    <li><Link to='/all-products' className="hover:underline">Produkty</Link></li>
                    <li><Link to='' className="hover:underline">Kontakty</Link></li>
                    <li><img src={showCart ? cartIconOpen : cartIconClosed} alt="shopping cart icon" onClick={toggleCart} className="h-6 w-6 cursor-pointer" /></li>
                    {showCart && <CartSidebar></CartSidebar>}
                </ul>
            </nav>
        </header>
    )
}

export default Header