import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataProvider from './context/DataProvider.jsx';
import CartProvider from './context/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </DataProvider>
    </StrictMode>,
)
