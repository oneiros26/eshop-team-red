import TrendingSection from "./components/features/trendingsection";
import React, { useContext } from "react";
import ProductCard from "./components/features/product-card/ProductCard";
import { DataContext } from "./context/DataProvider";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import CheckoutForm from "./pages/CheckoutForm";
import AddressForm from "./components/features/AddressForm";
import Payment from "./components/features/Payment";

function App() {
  const apiData = useContext(DataContext);

  const router = createBrowserRouter([
    {
      
      path: "/",
      element: (
        <main>
          <TrendingSection />
        </main>
      ),
      errorElement: <p>Error 404, page not found. How did you get here?</p>,
    },
    {
      path: "/product/:productId",
      element: <ProductPage />,
    },
    {
      path: "/cart",
      element: <p>CART COMPONENT</p>,
    },
    {
      path: "/checkout/step-1",
      element: <CheckoutForm />,
    },
    {
      path: "/checkout/step-2",
      element: (
        <main className="flex flex-col h-screen gap-10 w-full">
          <section className="flex gap-10 w-full h-auto">
            <AddressForm />
            <Payment />
          </section>
          <button
            className="cursor-pointer w-30 h-15 bg-green-400 hover:bg-green-500 rounded-lg self-center text-xl fixed bottom-5"
            type="submit"
          >
            Submit
          </button>
        </main>
      ),
    },
    {
      path: "/checkout/step-3",
      element: <p>CONFIRM COMPONENT</p>,
    },
    {
      path: "/all-products",
      element: <p>CHECKOUT COMPONENT</p>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
