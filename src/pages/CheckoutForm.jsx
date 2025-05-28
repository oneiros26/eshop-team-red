import { useNavigate } from "react-router-dom";
import { useOrderData } from "../context/OrderDataProvider";

function CheckoutForm() {
  const { formValues, setFormValues } = useOrderData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/checkout/step-2`);
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl text-slate-900 font-bold">Checkout</h1>
      <form
        className="flex flex-col gap-4 items-start w-1/4"
        onSubmit={handleSubmit}
        onChange={onChange}
      >
        <div>
          <h2 className="text-2xl text-slate-800 font-semibold mb-2">
            Pick Delivery
          </h2>
          <div className="flex gap-2">
            <input type="radio" name="delivery" value="standard" />
            <label htmlFor="standard">Standard Delivery - 80$</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="delivery" value="express" />
            <label htmlFor="express">Express Delivery - 120$</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="delivery" value="store" />
            <label htmlFor="same-day">Store Pickup - Free</label>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-slate-800 font-semibold mb-2">
            Pick Payment
          </h2>
          <div className="flex gap-2">
            <input type="radio" name="payment" value="applepay" />
            <label htmlFor="applepay">ApplePay</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="googlepay" />
            <label htmlFor="googlepay">GooglePay</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="paypal" />
            <label htmlFor="paypal">PayPal</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="visa" />
            <label htmlFor="visa">Visa</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="payment" value="mastercard" />
            <label htmlFor="mastercard">Mastercard</label>
          </div>
        </div>
        <button
          className="cursor-pointer w-20 h-10 bg-green-400 hover:bg-green-500 rounded-sm self-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default CheckoutForm;
