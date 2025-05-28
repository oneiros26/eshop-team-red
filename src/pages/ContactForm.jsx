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
    <section className="w-full h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl text-slate-900 font-bold">Kontaktujte nás</h1>
      <form
        className="flex flex-col gap-4 items-start w-1/4"
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
          className="cursor-pointer w-20 h-10 bg-green-400 hover:bg-green-500 rounded-sm self-center"
          type="submit"
        >
          Odeslat
        </button>
      </form>
    </section>
  );
}
export default ContactForm;
