import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src="https://fullsend.agency/wp-content/uploads/2024/10/ferrari-logo.jpg" alt="logo" className="header-logo" />
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
        >
          ☰
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Domov</Link>
        <Link to="/products">Produkty</Link>
        <Link to="/contact">Kontakt</Link>
      </div>

      <div className="header-center">
        <h1 className="header-title">TurboPit</h1>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Hledat..."
          className="header-search"
          aria-label="Vyhledávání"
        />
        <div className="cart-container">
          <button
            className="header-cart"
            aria-label="Košík"
            onClick={() => setCartOpen(!cartOpen)}
          >
            🛒
          </button>

          {cartOpen && (
            <div className="cart-dropdown">
              <p>Košík je prázdný.</p>
              {/* Sem můžeme později přidat produkty v košíku */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
