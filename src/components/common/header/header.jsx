import React from 'react';
import './header.css';

export default function Header() 
{
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://fullsend.agency/wp-content/uploads/2024/10/ferrari-logo.jpg" alt="nejake-logo" className="header-logo"/>
      </div>

      <div className="header-center">
        <h1 className="header-title">TurboPit</h1>
      </div>

      <div className="header-right">
        <a href="tel:+420123456789" className="header-contact">Kontakt: +420 702 568 498</a>
        <button className="header-cart" aria-label="Košík">
          🛒
        </button>
      </div>
    </header>
  );
}
