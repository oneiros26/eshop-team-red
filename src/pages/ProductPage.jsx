import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { CartContext } from "../context/CartProvider";
import React, { useContext } from "react";

function ProductPage() {
  const params = useParams();
  const apiData = useContext(DataContext);
  const {addToCart} = useContext(CartContext);

  console.log(apiData);

  const matchedItem = apiData.find((item) => item.id == params.productId);

  return (
    <main className="min-h-screen bg-sky-800 p-8">
      {matchedItem ? (
        <main>
  <div className=" bg-sky-800">
    <div className="flex flex-col md:flex-row gap-4">
      {/* Img */}
      <div className="border border-gray-300 bg-white p-4 rounded-xl md:w-1/2">
        <img src={matchedItem.image} alt={matchedItem.title} className="max-h-[80vh] w-auto mx-auto" />
      </div>

      {/* Text */}
      <div className="border border-gray-300 bg-gray-100 p-4 rounded-xl md:w-1/2">
        <h1 className="text-xl text-[clamp(1.5rem,3vw,4rem)] font-semibold mb-2">{matchedItem.title}</h1>
        <hr className="my-4 border-gray-300" />
        <p className="mb-1 text-[clamp(1rem,2vw,3rem)]">Cena: {matchedItem.price},-</p>
        <hr className="my-4 border-gray-300" />
        <p className="mb-1 text-[clamp(1rem,1.5vw,2.5rem)]">{matchedItem.description}</p><br></br>
        <button onClick={() => addToCart(matchedItem.id)} className="mx-auto block whitespace-nowrap -bottom-100 left bg-green-700 hover:bg-green-600 text-white py-3 px-6 text-lg rounded-lg hover:opacity-100 transition-opacity">
          Přidat do košíku.
        </button>
      </div>
    </div>
  </div>
</main>

      ) : (
        <p>Error 404, page not found. How did you get here?</p>
      )}
    </main>
  );
}

export default ProductPage;
