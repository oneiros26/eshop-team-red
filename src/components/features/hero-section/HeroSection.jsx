import React from 'react';
import img from '../../../assets/heroImige.webp';
import './heroSection.css';

function HeroSection() {
  return (
    <div className="hero-container"> {/* Main container with relative positioning */}
      <img src={img} alt="Pozadí" className="hero-image" /> {/* Background image */}
      
      <div className="overlay"> {/* Overlay content container */}
        <div> {/* Inner box with dark background and text */}
          <h1 className="hero-title">Vítejte ve světě rychlosti a dokonalého designu</h1><br />
          
          <p>
            U nás nekupujete jen auto – volíte životní styl. Specializujeme se na prodej špičkových sportovních vozů a formulových speciálů, které probudí vaši vášeň pro jízdu. Nabízíme pečlivě vybrané modely od prestižních značek, které kombinují výkon, technologii a estetiku na nejvyšší úrovni.
            <br />
            Ať už hledáte adrenalin na závodní trati, nebo elegantní dominanci na silnici, jsme tu pro vás. Naše vozy nejsou jen dopravní prostředek – jsou to emotivní stroje, které přepisují pravidla.
          </p>
          <button className="overlay-button">Přejdi na trending produkty.</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
