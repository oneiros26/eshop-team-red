
function ProductCard({image, title, price}) {

    return (
        <div className="flex flex-col items-center justify-between w-[200px] h-[300px] p-3 bg-[#ffffff] rounded-3xl relative m-2 hover:shadow">
            <img
                className="w-full h-[176px] bg-[#656565] rounded-2xl object-cover mb-1"
                src={image}
                alt="obrázek produktu"
            />
            <div className="w-full relative p-1 flex flex-col items-start">
                <h3 className="text-black font-normal text-[14px] leading-normal mt-[-4px] font-inter">
                    {title}
                </h3>
            </div>
            <div className="w-full flex justify-between items-center p-1 relative">
                <p className="text-black font-normal text-[12px] leading-normal font-inter">
                    {price}₹
                </p>
                <button className="bg-blue-500 w-[32px] h-[32px] rounded-full overflow-hidden relative flex items-center justify-center">
                    <img className="w-[24px] h-[24px]" src="../src/assets/icons/icons8-lease-30.png" alt="icon" />
                </button>
            </div>
        </div>
    );
}

export default ProductCard
