import FormInput from "../components/common/form-fields/FormInput";
import FormSelect from "../components/common/form-fields/FormSelect";
import Textarea from "../components/common/form-fields/Textarea";
import React, { useState } from "react";

function CheckoutForm() {
  const [formValues, setFormValues] = useState({
    delivery: "",
    payment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl text-slate-900 font-bold">Checkout</h1>
      <form
        className="flex flex-col gap-4 items-start w-1/4"
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className="text-2xl text-slate-800 font-semibold mb-2">
            Pick Delivery
          </h2>
          <div className="flex gap-2">
            <input type="radio" name="delivery" value="standard" />
            <label for="standard">Standard Delivery - 80$</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="delivery" value="express" />
            <label for="express">Express Delivery - 120$</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="delivery" value="store" />
            <label for="same-day">Store Pickup - Free</label>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-slate-800 font-semibold mb-2">
            Pick Payment
          </h2>
          <div className="flex gap-2">
            <input type="radio" name="payment" value="applepay" />
            <label for="applepay">ApplePay</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="googlepay" />
            <label for="googlepay">GooglePay</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="paypal" />
            <label for="paypal">PayPal</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="visa" />
            <label for="visa">Visa</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="mastercard" />
            <label for="mastercard">Mastercard</label>
          </div>
        </div>
        <button
          className="cursor-pointer w-20 h-10 bg-green-400 hover:bg-green-500 rounded-sm self-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;
