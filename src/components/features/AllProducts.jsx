import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";
import ProductFilter from "./ProductFilter";


function AllProducts() {
    const apiData = useContext(DataContext)

    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {}, [apiData]);

    const selectedProducts = apiData
        .filter((product) => (category.length === 0 || category.includes(product.category)))
        .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()));

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
            <div className="w-1/6 min-w-[200px] flex flex-col items-start justify-start mt-[200px] mr-4 pl-4">
                <div className="mb-6 w-full">
                    <input
                        type="text"
                        placeholder="🔍Hledej..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="w-full">
                    <h2>CATEGORIES</h2>
                    <ProductFilter onChange={handleCategoryChange} name={"Group GT3"} value={"groupgt3"}/>
                    <ProductFilter onChange={handleCategoryChange} name={"Formula 1"} value={"formula1"}/>
                    <ProductFilter onChange={handleCategoryChange} name={"Formula E💅"} value={"formulae"}/>
                    <ProductFilter onChange={handleCategoryChange} name={"NASCAR"} value={"nascar"}/>
                    <ProductFilter onChange={handleCategoryChange} name={"Hypercars"} value={"hypercar"}/>
                    <ProductFilter onChange={handleCategoryChange} name={"Special"} value={"special"}/>
                </div>
            </div>
            <div className="mt-[64px] flex flex-col text-center items-center justify-center w-5/6">
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
