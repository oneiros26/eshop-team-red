import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIconClosed from "./../../../assets/icons/cartIconClosed.svg";
import cartIconOpen from "./../../../assets/icons/cartIconOpen.png";
import CartSidebar from "./CartSidebar";
import Logo from "../../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-20 h-16 flex items-center px-8 justify-between">
      <Link to="/">
        <img className="h-10 w-auto object-contain" src={Logo} alt="logo" />
      </Link>
      <section></section>
      <nav className="h-full">
        <ul onMouseLeave={() => setShowCart(false)} className="flex items-center gap-6 h-full">
          <li>
            <Link to="/" onClick={() => setShowCart(false)} className="hover:underline">
              Domov
            </Link>
          </li>
          <li>
            <Link to="/all-products" onClick={() => setShowCart(false)} className="hover:underline">
              Produkty
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setShowCart(false)} className="hover:underline">
              Kontakty
            </Link>
          </li>
          <li>
            <img
              src={showCart ? cartIconOpen : cartIconClosed}
              alt="shopping cart icon"
              className="h-6 w-6 cursor-pointer"
              onMouseEnter={() => setShowCart(true)}
              onClick={() => setShowCart(!showCart)}
            />
            {showCart && <CartSidebar setShowCart={setShowCart}></CartSidebar>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
