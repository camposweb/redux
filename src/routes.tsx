import { Routes, Route } from 'react-router-dom';
import App from './App';

import { Catalog } from './components/Catalog';
import { Cart } from './pages/cart';

export function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/" element={<App />}/> */}
            <Route path="cart" element={<Cart />}/>
        </Routes>
    )
}