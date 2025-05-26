
function ProductCard() {
    return (
        <div className="flex flex-col items-center justify-between w-[200px] h-[300px] p-3 bg-[#d9d9d9] rounded-3xl relative m-2">
            <img
                className="w-full h-[176px] bg-[#656565] rounded-2xl object-cover"
                src="https://www.fixturescloseup.com/wp-content/uploads/2023/07/Market-32-Childrens-Rocket-Ship-Shopping-Cart-Main1.jpg"
                alt="obrázek produktu"
            />
            <div className="w-full relative p-1 flex flex-col items-start">
                <h3 className="text-black font-normal text-[14px] leading-normal mb-1 mt-[-4px] font-inter">
                    Fast car
                </h3>
                <p className="text-black font-normal text-[8px] leading-normal font-inter">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="w-full flex justify-between items-end p-1 relative">
                <p className="text-black font-normal text-[12px] leading-normal font-inter">
                    20 000¥
                </p>
                <button className="bg-[#f00000] w-8 h-8 rounded-full overflow-hidden relative flex items-center justify-center">
                    +
                </button>
            </div>
        </div>
    );
}

export default ProductCard
