import TrendingSection from "./components/features/trendingsection";
import React, { useContext } from "react";
import ProductCard from "./components/features/product-card/ProductCard";
import { DataContext } from "./context/DataProvider";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      
      path: "/",
      element: (
        <main>
          <h1 className="text-3xl font-bold bg-red-800">Team Red</h1>
          <div className="flex flex-wrap">
            {apiData.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </main>
      ),
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
      path: "/checkout",
      element: <p>CHECKOUT COMPONENT</p>,
    },
    {
      path: "/checkout-confirm",
      element: <p>CONFIRM COMPONENT</p>,
    },
    {
      path: "/all-products",
      element: <p>CHECKOUT COMPONENT</p>,
    },
  ]);

  return (
    <>
      <h1 className="text-3xl font-bold bg-red-800">Team Red</h1>
      <TrendingSection />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
