import { useOrderData } from "../context/OrderDataProvider";
import { Link } from "react-router-dom";

function OrderConfirm() {
  const { formValues } = useOrderData();

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-bold">Your order was successful</h1>
      <article className="grid grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold">Contact Info</h2>
          <ul>
            <li
              className="
            flex gap-2"
            >
              <strong>Name: </strong> <p>{formValues.name}</p>
            </li>
            <li
              className="
            flex gap-2"
            >
              <strong>Email: </strong> <p>{formValues.email}</p>
            </li>
            <li
              className="
            flex gap-2"
            >
              <strong>Address: </strong> <p>{formValues.address}</p>
            </li>
            <li
              className="
            flex gap-2"
            >
              <strong>Zip Code: </strong> <p>{formValues.zipCode}</p>
            </li>
            <li
              className="
            flex gap-2"
            >
              <strong>Country: </strong> <p>{formValues.country}</p>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Delivery & Payment</h2>
          <p
            className="
          flex gap-2"
          >
            <strong>Delivery type: </strong> <p>{formValues.delivery}</p>
          </p>
          <p
            className="
          flex gap-2"
          >
            <strong>Payed with: </strong> <p>{formValues.payment}</p>
          </p>
        </section>
      </article>
      <h3 className="text-lg">Something wrong? Please contact us!</h3>
      <Link className="flex justify-center items-center cursor-pointer py-3 px-6 bg-blue-400 hover:bg-blue-500 rounded-lg self-center text-xl">
        Contact
      </Link>
    </main>
  );
}

export default OrderConfirm;
