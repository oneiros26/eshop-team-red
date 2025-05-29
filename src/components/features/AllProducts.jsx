import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";
import ProductFilter from "./ProductFilter";


function AllProducts() {
    const apiData = useContext(DataContext)

    const [selectedIds, setSelectedIds] = useState([]);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        if (apiData && apiData.length > 0) {
            setSelectedIds(apiData.map((product) => product.id));
        }
    }, [apiData]);

    const selectedProducts = apiData
        .filter((product) => selectedIds.includes(product.id))
        .filter((product) =>
            category === "all" ? true : product.category === category // pokud category = all -> select vsechny produkty
        );

    function handleIdChange(e) {
        if (e.target.checked === true) {
            setSelectedIds([8, 6, 9])
        }
        else {
            setSelectedIds(apiData.map((product) => product.id))
        }
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }

    return(
        <div className="flex flex-row">
            <div className="w-1/10 min-w-[200px] flex flex-col items-start justify-start mt-[64px] mr-8">
                <ProductFilter onChange={handleIdChange} name={"id"}/>
                <p>CATEGORIES</p>
                <ProductFilter onChange={handleCategoryChange} name={"all"} checked={category === "all"} value={"all"}/>
                <ProductFilter onChange={handleCategoryChange} name={"electronics"} checked={category === "electronics"} value={"electronics"}/>
                <ProductFilter onChange={handleCategoryChange} name={"jewelery"} checked={category === "jewelery"} value={"jewelery"}/>
                <ProductFilter onChange={handleCategoryChange} name={"men's clothing"} checked={category === "men's clothing"} value={"men's clothing"}/>
                <ProductFilter onChange={handleCategoryChange} name={"women's clothing"} checked={category === "women's clothing"} value={"women's clothing"}/>
            </div>
            <div className="mt-[64px] flex flex-col text-center items-center justify-center w-4/5">
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
