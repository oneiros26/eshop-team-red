import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";
import ProductFilter from "./ProductFilter";


function AllProducts() {
    const apiData = useContext(DataContext)

    const [category, setCategory] = useState([]);

    useEffect(() => {}, [apiData]);

    const selectedProducts = apiData
        .filter((product) => category.length === 0 || category.includes(product.category));

    function handleCategoryChange(e) {
        if (e.target.checked) {
            setCategory(c => [...c, e.target.value]);
        }
        else {
            setCategory(c => c.filter((cat) => cat !== e.target.value));
        }
    }

    return(
        <div className="flex flex-row">
            <div className="w-1/10 min-w-[200px] flex flex-col items-start justify-start mt-[200px] mr-8">
                <h2>CATEGORIES</h2>
                <ProductFilter onChange={handleCategoryChange} name={"electronics"} value={"electronics"}/>
                <ProductFilter onChange={handleCategoryChange} name={"jewelery"} value={"jewelery"}/>
                <ProductFilter onChange={handleCategoryChange} name={"men's clothing"} value={"men's clothing"}/>
                <ProductFilter onChange={handleCategoryChange} name={"women's clothing"} value={"women's clothing"}/>
            </div>
            <div className="mt-[64px] flex flex-col text-center items-center justify-center w-9/10">
                <h1 className="m-[40px] font-bold text-3xl text-gray-800">
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
