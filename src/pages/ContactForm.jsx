import img from "../assets/contact-bg.jpg";
import FormInput from "../components/common/form-fields/FormInput";
import FormSelect from "../components/common/form-fields/FormSelect";
import Textarea from "../components/common/form-fields/Textarea";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    subject: "",
    country: "",
    issue: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Váš email..",
      errorMessage: "Neplatný email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "subject",
      type: "text",
      placeholder: "Vložte předmět..",
      errorMessage: "Text je příliš dlouhý nebo používá speciální charaktery.",
      label: "Předmět",
      pattern: "^[\\w\\W]{1,15}$",
      required: true,
    },
  ];

  const selects = [
    {
      id: 3,
      name: "country",
      errorMessage: "Země nebyla vybrána.",
      label: "Odkud jste?",
      required: true,
      options: ["Evropa", "Spojené Státy", "Jiné"],
    },
    {
      id: 4,
      name: "issue",
      errorMessage: "Problém nebyl vybrán.",
      label: "Problém",
      required: true,
      options: [
        "Zrušit objednávku (ještě nebyla odeslána)",
        "Vrátit zboží a požádat o vrácení peněz",
        "Dotaz na webové stránky",
        "Dotaz na produkt",
        "Vada produktu",
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={img}
        alt="Pozadí"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <section className="w-full h-screen flex justify-center items-center flex-col relative z-10">
        <h1 className="border-b border-gray-400 px-5 py-3 rounded-t-xl bg-blue-100/80 text-3xl text-black font-bold mt-7">
          Kontaktujte nás
        </h1>
        <article className="bg-blue-50/80 flex flex-row w-1/1 md:w-1/2 mx-auto rounded-xl px-8 gap-8">
          <section className="flex flex-col justify-start gap-8 w-1/2 mt-8">
            <div>
              <h3 className="font-semibold">📬 E-mail:</h3>
              <p> info@autoformula.cz</p>
            </div>
            <div>
              <h3 className="font-semibold">📞 Telefon:</h3>
              <p>+420 777 456 789</p>
            </div>
            <div>
              <h3 className="font-semibold">📍 Adresa (výdejní místo):</h3>
              <p>AutoFormula s.r.o.</p>
              <p>Pole Position 123, 170 00 Praha 7</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">🌐 Sociální sítě</h3>
              <div className="flex flex-row gap-4">
                {/* Github */}
                <Link
                  to="https://github.com/oneiros26/eshop-team-red"
                  className="hover:scale-110"
                >
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333] cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </span>
                </Link>
                {/* Instagram */}
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584] cursor-pointer hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
                {/* YouTube */}
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000] cursor-pointer hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
                {/* X */}
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black cursor-pointer hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">
                💼 Otevírací doba zákaznické podpory:
              </h3>
              <p>Po–Pá: 9:00 – 17:00</p>
              <p>So–Ne: Zavřeno</p>
            </div>
          </section>
          <section className="w-1/2">
            <form
              className="flex flex-col gap-4 items-start mt-4"
              onSubmit={handleSubmit}
            >
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={formValues[input.name]}
                  onChange={onChange}
                />
              ))}
              {selects.map((select) => (
                <FormSelect
                  key={select.id}
                  {...select}
                  value={formValues[select.name]}
                  onChange={onChange}
                />
              ))}
              <Textarea />
              <button
                className="cursor-pointer w-20 h-10 bg-green-400 hover:bg-green-500 rounded-sm self-center mb-4"
                type="submit"
              >
                Odeslat
              </button>
            </form>
          </section>
        </article>
      </section>
    </div>
  );
}
export default ContactForm;
