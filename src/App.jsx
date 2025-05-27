import TrendingSection from "./components/features/trendingsection";
import React, { useContext } from "react";
import ProductCard from "./components/features/product-card/ProductCard";
import { DataContext } from "./context/DataProvider";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import CheckoutForm from "./pages/CheckoutForm";
import AddressForm from "./components/features/AddressForm";
import Payment from "./components/features/Payment";
import Header from "./components/common/header/Header"

function App() {

  const router = createBrowserRouter([
    {

      path: "/",
      element: (
        <>
          <Header></Header>
          <main>
            <TrendingSection />
          </main>
        </>
      ),
      errorElement: <p>Error 404, page not found. How did you get here?</p>,
    },
    {
      path: "/product/:productId",
      element: (
        <>
          <Header></Header>
          <ProductPage />
        </>
      )
    },
    {
      path: "/cart",
      element: (
        <>
          <Header></Header>
          <p>CART COMPONENT</p>
        </>
      )
    },
    {
      path: "/checkout/step-1",
      element: (
        <>
          <Header></Header>
          <CheckoutForm />
        </>
      )
    },
    {
      path: "/checkout/step-2",
      element: (
        <>
          <Header></Header>
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
        </>
      )
    },
    {
      path: "/checkout/step-3",
      element: (
        <>
          <Header></Header>
          <p>CONFIRM COMPONENT</p>
        </>
      )
    },
    {
      path: "/all-products",
      element: (
        <>
          <Header></Header>
          <p>CHECKOUT COMPONENT</p>
        </>
      )
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
