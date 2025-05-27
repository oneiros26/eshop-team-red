import React, { useState } from "react";
import FormInput from "../common/form-fields/FormInput";

function Payment() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    cardNumber: "",
    expiration: "",
    ccv: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Enter your name..",
      errorMessage: "Text cannot contain special characters.",
      label: "Full Name (as displayed on card)*",
      pattern: "^[\\w]$",
      required: true,
    },
    {
      id: 2,
      name: "cardNumber",
      type: "text",
      placeholder: "Enter your card number..",
      errorMessage: "Card doesn't exist.",
      label: "Card Number*",
      pattern: "^[\\d]{16}$",
      required: true,
    },
    {
      id: 3,
      name: "expiration",
      type: "date",
      label: "Expiration Date",
      required: true,
    },
    {
      id: 4,
      name: "ccv",
      type: "text",
      placeholder: "Enter CCV..",
      errorMessage: "CCV is invalid.",
      label: "CCV*",
      pattern: "^[\\d]{3}$",
      required: true,
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
      <h1 className="text-3xl text-slate-900 font-bold">Payment</h1>
      <form
        className="grid grid-cols-2 grid-rows-2 gap-4 items-start w-3/4"
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
      </form>
    </section>
  );
}

export default Payment;
