import FormInput from "../common/form-fields/FormInput";
import FormSelect from "../common/form-fields/FormSelect";
import Textarea from "../common/form-fields/Textarea";
import React, { useState } from "react";

function AddressForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    fullName: "",
    address: "",
    country: "",
    zipCode: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter email..",
      errorMessage: "Invalid email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "fullName",
      type: "text",
      placeholder: "Enter your name..",
      errorMessage: "Text is too long or uses special characters.",
      label: "Full Name",
      pattern: "^[\\w]$",
      required: true,
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Enter your address..",
      errorMessage: "Text is too long or uses special characters.",
      label: "Address",
      pattern: "^[\\w]$",
      required: true,
    },
    {
      id: 5,
      name: "zipCode",
      type: "text",
      placeholder: "Enter zip code..",
      errorMessage: "Text is too long or uses special characters.",
      label: "Zip Code",
      pattern: "^[\\d ]{1,10}$",
      required: true,
    },
  ];

  const selects = [
    {
      id: 4,
      name: "country",
      errorMessage: "You need to select one.",
      label: "Where are you from?",
      required: true,
      options: [
        "My country is not on the list",
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Canada",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kazakhstan",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "North Macedonia",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "United States",
        "Vatican City",
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
      <h1 className="text-3xl text-slate-900 font-bold">Address</h1>
      <form
        className="flex flex-col gap-4 items-start w-1/2"
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
      </form>
    </section>
  );
}

export default AddressForm;
