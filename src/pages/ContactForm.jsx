import FormInput from "../components/common/form-fields/FormInput";
import FormSelect from "../components/common/form-fields/FormSelect";
import Textarea from "../components/common/form-fields/Textarea";
import React, { useState } from "react";

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
      placeholder: "Potvrďte email..",
      errorMessage: "Nesprávný email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "subject",
      type: "text",
      placeholder: "Potvrďte předmět..",
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
      options: ["Evropa", "US", "Jiné"],
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
    <section className="bg-blue-100 w-full h-screen flex justify-center items-center flex-col">
      <h1 className="border-b border-gray-400 p-2 rounded-t-xl bg-white text-3xl text-slate-900 font-bold mt-7"> Kontaktujte nás</h1>
      <div className="bg-white flex flex-row gap-4 w-1/1 md:w-1/2 mx-auto rounded-xl">
        <div className="gap-4 w-1/2 mt-5 ml-4">
        <p>
          📧 E-mail:<br/>
info@autoformula.cz<br/>
<br/>
📞 Telefon:<br/>
+420 777 456 789 (Po–Pá 9:00–17:00)<br/>
<br/>
📍 Adresa (výdejní místo):<br/>
AutoFormula s.r.o.<br/>
Pole Position 123, 170 00 Praha 7<br/>
<br/>
Sociální sítě<br/>
🌐 Web: www.autoformula.cz<br/>
📸 Instagram: @autoformula_cz<br/>
📘 Facebook: AutoFormula CZ<br/>
📺 YouTube: AutoFormula TV – testy a unboxingy<br/>
🐦 Twitter/X: @AutoFormulaCZ<br/><br/>
✉️ Otevírací doba zákaznické podpory<br/>
Po–Pá: 9:00 – 17:00<br/>
So–Ne: Zavřeno<br/>
Reakce do 24 h ve všední dny<br/>
        </p>
        </div>
        <div>
        <form
        className="flex flex-col gap-4 items-start mt-2"
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
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
