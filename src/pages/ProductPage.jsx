import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import React, { useContext } from "react";

function ProductPage() {
  const params = useParams();
  const apiData = useContext(DataContext);

  console.log(apiData);

  const matchedItem = apiData.find((item) => item.id == params.productId);

  return (
    <main>
      {matchedItem ? (
        <main>
          <img src={matchedItem.image} />
          <h1>{matchedItem.title}</h1>
          <p>Cena: {matchedItem.price}</p>
          <p>{matchedItem.description}</p>
        </main>
      ) : (
        <p>Error 404, page not found. How did you get here?</p>
      )}
    </main>
  );
}

export default ProductPage;
