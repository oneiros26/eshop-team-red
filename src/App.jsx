import ProductCard from "./components/features/product-card/ProductCard";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-red-800">Team Red</h1>
      <ProductCard image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJFrpQV4AOommmUX_YDE2zz6YVigm8wMkBg&s"} title={"by this guy"} price={"200 000"}/>
    </>
  )
}

export default App;
