import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";
import ProductFilter from "./ProductFilter";


function AllProducts() {
    const apiData = useContext(DataContext)

    const [selectedIds, setSelectedIds] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (apiData && apiData.length > 0) {
            setSelectedIds(apiData.map((product) => product.id));
        }
    }, [apiData]);

    const selectedProducts = apiData
        .filter((product) => selectedIds.includes(product.id))
        .filter((product) => category.length === 0 || category.includes(product.category));

    function handleIdChange(e) {
        if (e.target.checked === true) {
            setSelectedIds([8, 6, 9])
        }
        else {
            setSelectedIds(apiData.map((product) => product.id))
        }
    }

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
                <ProductFilter onChange={handleIdChange} name={"id"}/>
                <h2>CATEGORIES</h2>
                <ProductFilter onChange={handleCategoryChange} name={"electronics"} value={"electronics"}/>
                <ProductFilter onChange={handleCategoryChange} name={"jewelery"} value={"jewelery"}/>
                <ProductFilter onChange={handleCategoryChange} name={"men's clothing"} value={"men's clothing"}/>
                <ProductFilter onChange={handleCategoryChange} name={"women's clothing"} value={"women's clothing"}/>
            </div>
            <div className="mt-[64px] flex flex-col text-center items-center justify-center w-9/10">
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
