import { useState } from 'react';

function ProductFilter({ onChange, name, checked, value }) {

    return (
        <div className="m-2 w-full">
            <div className="flex flex-row justify-between">
                <label className="text-gray-700 font-medium" htmlFor={name}>
                    {name}
                </label>
                <input
                    id={name}
                    type="checkbox"
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className="h-5 w-5 border-gray-300 rounded"
                />
            </div>
        </div>
    )
}

export default ProductFilter