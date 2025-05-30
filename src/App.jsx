import TrendingSection from "./components/features/trendingsection";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import CheckoutForm from "./pages/CheckoutForm";
import AddressForm from "./pages/AddressForm";
import Payment from "./pages/PaymentForm";
import Header from "./components/common/header/Header";
import CategorySection from "./components/features/CategorySection";
import OrderConfirm from "./pages/OrderConfirm";
import HeroSection from "./components/features/HeroSection";
import ContactForm from "./pages/ContactForm";
import Testimonials from "./components/common/Testimonials";
import Footer from './components/common/footer/Footer';
import AllProducts from "./components/features/AllProducts";
import Cart from "./components/features/Cart"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <main>
            <HeroSection />
            <CategorySection />
            <TrendingSection />
            <Testimonials />
          </main>
          <Footer />
        </>
      ),
      errorElement: <p>Error 404, page not found. How did you get here?</p>,
    },
    {
      path: "/product/:productId",
      element: (
        <>
          <Header />
          <ProductPage />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Header />
          <Cart></Cart>
        </>
      ),
    },
    {
      path: "/checkout/step-1",
      element: (
        <>
          <Header />
          <CheckoutForm />
        </>
      ),
    },
    {
      path: "/checkout/step-2",
      element: (
        <>
          <Header />
          <AddressForm />
        </>
      ),
    },
    {
      path: "/checkout/step-3",
      element: (
        <>
          <Header />
          <Payment />
        </>
      ),
    },
    {
      path: "/checkout/step-4",
      element: (
        <>
          <Header />
          <OrderConfirm />,
        </>
      ),
    },
    {
      path: "/all-products",
      element: (
        <>
          <Header />
          <AllProducts />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Header />
          <ContactForm />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
