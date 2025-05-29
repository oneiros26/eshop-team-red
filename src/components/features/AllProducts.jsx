import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";
import ProductFilter from "./ProductFilter";


function AllProducts() {
    const apiData = useContext(DataContext)

    const [selectedIds, setSelectedIds] = useState([]);

    useEffect(() => {
        if (apiData && apiData.length > 0) {
            setSelectedIds(apiData.map((product) => product.id));
        }
    }, [apiData]);

    const selectedProducts = apiData.filter((product) =>
        selectedIds.includes(product.id)
    );

    function handleChange(e) {
        if (e.target.checked === true) {
            setSelectedIds([8, 6, 9])
        }
        else {
            setSelectedIds(apiData.map((product) => product.id))
        }
    }

    return(
        <div>
            <ProductFilter onChange={handleChange}/>
            <div className="mt-[64px] flex flex-col text-center items-center justify-center">
                <h1 className="m-[40px] font-bold text-5xl text-gray-800">
                    all products
                </h1>
                <div className="flex flex-wrap justify-center max-w-[1200px] w-full">
                    {selectedProducts.map((product) => (
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
        </div>
    )
}

export default AllProducts
