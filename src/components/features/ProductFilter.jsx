import { useState } from 'react';

function ProductFilter({ onChange, name }) {

    return(
        <div className="mt-[64px] flex flex-col border-green-800 border-3 pl-30 pr-30">
            <label className="text-gray-800 font-bold text-lg ml-2">{name}</label>
            <div className="flex flex-row border-3">
                <p>3</p>
                <input type="checkbox" onChange={onChange}/>
            </div>
        </div>
    )
}

export default ProductFilter