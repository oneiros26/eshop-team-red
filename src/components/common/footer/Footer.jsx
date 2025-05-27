import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Profi eshop. Všechna práva vyhrazena.</p>
        <nav>
          <a href="/kontakt">Kontakt</a>
          <a href="/o-nas">O nás</a>
          <a href="/podminky">Obchodní podmínky</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
