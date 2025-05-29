import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext();

function DataProvider({ children }) {
    const [data, setData] = useState([]);
    const API_URL = 'http://localhost:5000/api/products'; //https://fakestoreapi.com/products

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);

                if (response.ok) {
                    console.log("HTTP succeeded: " + response.status);
                    const JSON = await response.json();
                    setData(JSON);
                } else {
                    console.log("HTTP error: " + response.status);
                }
            } catch (error) {
                console.log("Network error: " + error.message);
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        console.log('Data:', data);
    }, [data]);

    return <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
}

export default DataProvider


