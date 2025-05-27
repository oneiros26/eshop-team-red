import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';

function Home() 
{
  return <h2>Hlavní strana</h2>;
}

function Products() 
{
  return <h2>Produkty</h2>;
}

function Contact() 
{
  return <h2>Kontakt</h2>;
}

function Cart() 
{
  return <h2>Košík</h2>;
}

function App() 
{
  return (
    <Router>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
