import TrendingSection from "./components/features/TrendingSection";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import CheckoutForm from "./pages/CheckoutForm";
import AddressForm from "./pages/AddressForm";
import Payment from "./pages/PaymentForm";
import OrderConfirm from "./pages/OrderConfirm";
import HeroSection from "./components/features/HeroSection";

function App() {
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
      element: <p>CART COMPONENT</p>, // TO-DO
    },
    {
      path: "/checkout/step-1",
      element: <CheckoutForm />,
    },
    {
      path: "/checkout/step-2",
      element: <AddressForm />,
    },
    {
      path: "/checkout/step-3",
      element: <Payment />,
    },
    {
      path: "/checkout/step-4",
      element: <OrderConfirm />,
    },
    {
      path: "/all-products",
      element: <p>CHECKOUT COMPONENT</p>, // TO-DO
    },
    {
      path: "/contact",
      element: "",
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
