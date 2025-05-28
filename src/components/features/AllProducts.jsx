import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";


function AllProducts() {
    const apiData = useContext(DataContext);

    return(
        <div className="mt-[64px] flex flex-col text-center items-center justify-center">
            <h1 className="m-[40px] font-bold text-5xl text-gray-800">
                all products
            </h1>
            <div className="flex flex-wrap justify-center max-w-[1200px] w-full">
                {apiData.map((product) => (
                    <ProductCard
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        id={product.id}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllProducts
