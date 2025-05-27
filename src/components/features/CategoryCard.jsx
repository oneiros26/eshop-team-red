
function ProductCard({title="not defined", image="https://placehold.co/450x300"}) {

    function handleOnClick() {
        console.log("category clicked!")
    }

    return (
        <div onClick={handleOnClick} className="flex-shrink-0 bg-cover h-[300px] w-[450px] relative">
            <img src={image} className="h-[300px] w-[450px] rounded-[40px]"/>
            <div className="w-fit h-fit">
                <h3 className="text-white text-center align-middle text-[32px] font-bold absolute left-8 bottom-8 text-shadow-lg backdrop-blur-md p-[4px] rounded-2xl">
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default ProductCard