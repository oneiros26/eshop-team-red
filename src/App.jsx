import React, { useContext } from "react";
import ProductCard from "./components/features/product-card/ProductCard";
import { DataContext } from "./context/DataProvider";

function App() {
  const apiData = useContext(DataContext);

  return (
    <>
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
    </>
  );
}

export default App;
