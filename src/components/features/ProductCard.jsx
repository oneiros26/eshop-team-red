import React, {useContext} from 'react'
import { CartContext } from '../../context/CartProvider';
import { Link } from 'react-router-dom';


function ProductCard({ image, title, price, id }) {

  const {addToCart} = useContext(CartContext);

  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-between w-[200px] h-[300px] p-3 bg-[#d8d8d8] rounded-3xl m-2 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Link to={`/product/${id}`} className="no-underline">
        <img
          className="w-full aspect-square bg-[#656565] rounded-2xl object-cover mb-1"
          src={image}
          alt="obrázek produktu"
        />
        <div className="w-full relative p-1 flex flex-col items-start">
          <h3 className="text-black font-normal text-[14px] leading-normal mt-[-4px] font-inter line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
      <div className="w-full flex justify-between items-center p-1 relative">
        <p className="text-black font-normal text-[12px] leading-normal font-inter">
          {price}₹
        </p>
        <button onClick={() => addToCart(id)} className="bg-blue-500 w-[32px] h-[32px] rounded-full relative flex items-center justify-center">
          <img
            className="w-[24px] h-[24px]"
            src="../src/assets/icons/plus.png"
            alt="icon"
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
