import { Link } from "react-router-dom";



function ProductCard({title="not defined", image="https://placehold.co/450x300"}) {
    
    return (
        <Link to={`/all-products`} className="flex-shrink-0">
            <div className="flex-shrink-0 bg-cover h-[300px] w-[450px] relative">
                <div className="bg-gradient-to-tr from-black to-transparent rounded-[40px]">
                    <img src={image} className="h-[300px] w-[450px] relative rounded-[40px] -z-10"/>
                </div>
                <div className="w-fit h-fit">
                    <h3 className="text-white text-center align-middle text-[32px] font-bold absolute left-8 bottom-8 text-shadow-lg p-[4px] rounded-2xl">
                        {title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard