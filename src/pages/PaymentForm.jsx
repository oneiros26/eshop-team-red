import FormInput from "../components/common/form-fields/FormInput";
import { useOrderData } from "../context/OrderDataProvider";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { formValues, setFormValues } = useOrderData();
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "cardName",
      type: "text",
      placeholder: "Enter your name..",
      errorMessage: "Text cannot contain special characters.",
      label: "Full Name*",
      pattern: "^[\\w ]{1,50}$",
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
    navigate("/checkout/step-4");
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl text-slate-900 font-bold">Payment</h1>
      <form
        className="flex flex-col gap-4 items-start w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-4 items-start w-full">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={formValues[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <button
          className="cursor-pointer w-30 h-15 bg-green-400 hover:bg-green-500 rounded-lg self-center text-xl mt-8"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Payment;
