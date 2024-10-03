import "./App.css";
import { CartProvider } from "./Components/CartContext/CartContext";
import { NavBar } from "./Components/NavBar/NavBar";
import { searchByCategory, searchByDescription } from "./api";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Components/Pages/Index";
import Ofertas from "./Components/Pages/Ofertas";
import Tecnologia from "./Components/Pages/Tecnologia";
import Moda from "./Components/Pages/Moda";
import Deportes from "./Components/Pages/Deportes";
import SaludYBelleza from "./Components/Pages/SaludYBelleza";
import HogarYJardin from "./Components/Pages/HogarYJardin";
import Canales from "./Components/Pages/Canales";
import SoporteYFAQ from "./Components/Pages/SoporteYFAQ";
import ContactForm from "./Components/Pages/Contacto";
import Producto from "./Components/Pages/Producto";
import Error from "./Components/Pages/Error";
import Cart from "./Components/Cart/Cart";
import { useCallback } from "react";


function App() {
    const [img, setImg] = useState([]);

    const handleCategorySearch = useCallback(async (term) => {
        const resultado = await searchByCategory(term);
        setImg(resultado);
    }, []);

    const handleDescriptionSearch = useCallback(async (term) => {
        const resultado = await searchByDescription(term);
        setImg(resultado);
    }, []);

    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar enSubmit={handleDescriptionSearch} />
                <Routes>
                        <Route path="/" element={<Index onSearch={handleCategorySearch} img={img} />}>
                            <Route index element={<Ofertas onSearch={handleDescriptionSearch} img={img} />} />
                            <Route path="/Tecnologia" element={<Tecnologia onSearch={handleCategorySearch} img={img} />} />
                            <Route path="/Moda" element={<Moda onSearch={handleCategorySearch} img={img} />} />
                            <Route path="/Deportes" element={<Deportes onSearch={handleCategorySearch} img={img} />} />
                            <Route path="/SaludYBelleza" element={<SaludYBelleza onSearch={handleCategorySearch} img={img} />} />
                            <Route path="/HogarYJardin" element={<HogarYJardin onSearch={handleCategorySearch} img={img} />} />
                            <Route path="/Producto/:id" element={<Producto />} />
                            <Route path="/Canales" element={<Canales />} />
                            <Route path="/SoporteYFAQ" element={<SoporteYFAQ />} />
                            <Route path="/ContactForm" element={<ContactForm />} />
                            <Route path="/Cart" element={<Cart />} />
                            <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;