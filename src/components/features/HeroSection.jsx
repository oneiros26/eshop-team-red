import img from "../../assets/heroImage.webp";

function HeroSection() {
  return (
    <div className="relative w-full h-screen mt-16">
      <img src={img} alt="Pozadí" className="w-full h-full object-cover" />

      <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-start">
        <div className="bg-black/60 text-white p-5 rounded-xl absolute top-12 left-5">
          <h1 className="leading-none text-[clamp(2rem,5vw,3rem)] font-extrabold">
            Vítejte ve světě rychlosti a dokonalého designu
          </h1>
          <p className="text-[clamp(1rem,3vw,1.5rem)] mt-4">
            Neprodáváme jen auta – nabízíme životní styl. Špičkové sportovní
            vozy a formulové speciály od prestižních značek. Výkon, technologie
            a krása v dokonalé harmonii.
            <br />
            Pro závodní adrenalin i elegantní dominanci na silnici. Vaše vášeň
            začíná zde.
          </p>
          <button className="cursor-pointer overlay-button whitespace-nowrap absolute -bottom-20 left bg-blue-700/80 hover:bg-blue-600 text-white py-3 px-6 text-lg rounded-lg hover:opacity-100 transition-opacity duration-300">
            Přejdi na trending produkty.
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
