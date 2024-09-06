import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import searchImages from "./api";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Components/Pages/Outlet";
import Ofertas from "./Components/Pages/Ofertas";
import Tecnologia from "./Components/Pages/Tecnologia";
import Moda from "./Components/Pages/Moda";
import Deportes from "./Components/Pages/Deportes";
import SaludYBelleza from "./Components/Pages/SaludYBelleza";
import HogarYJardin from "./Components/Pages/HogarYJardin";
import Canales from "./Components/Pages/Canales";
import SoporteYFAQ from "./Components/Pages/SoporteYFAQ";
import ContactForm from "./Components/Pages/Contacto";
import Error from "./Components/Pages/Error";

function App() {
    const [img, setImg] = useState([]);

    const handleSubmit = async (term) => {
        const resultado = await searchImages(term);
        setImg(resultado);
    };

    return (
        <BrowserRouter>
            <NavBar enSubmit={handleSubmit} />
            <Routes>
                <Route path="/" element={<Index onSearch={handleSubmit} img={img} />}>
                    <Route index element={<Ofertas onSearch={handleSubmit} img={img} />} />
                    <Route path="/Tecnologia" element={<Tecnologia onSearch={handleSubmit} img={img} />} />
                    <Route path="/Moda" element={<Moda onSearch={handleSubmit} img={img} />} />
                    <Route path="/Deportes" element={<Deportes onSearch={handleSubmit} img={img} />} />
                    <Route path="/SaludYBelleza" element={<SaludYBelleza onSearch={handleSubmit} img={img} />} />
                    <Route path="/HogarYJardin" element={<HogarYJardin onSearch={handleSubmit} img={img} />} />
                    <Route path="/Canales" element={<Canales />} />
                    <Route path="/SoporteYFAQ" element={<SoporteYFAQ />} />
                    <Route path="/ContactForm" element={<ContactForm />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;