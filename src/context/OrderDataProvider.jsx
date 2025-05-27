import { createContext, useContext, useState } from "react";

const OrderDataContext = createContext();

export const OrderDataProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    delivery: "",
    payment: "",
    name: "",
    address: "",
    country: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiration: "",
    ccv: "",
  });

  return (
    <OrderDataContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </OrderDataContext.Provider>
  );
};

export const useOrderData = () => useContext(OrderDataContext);
