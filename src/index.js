import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ingreso from "./pages/Ingreso/Ingreso";
import Registro from "./pages/Registro/Registro";
import Hola from "./pages/Hola/Hola";
import Filtros from "./pages/Filtros/Filtros";
import Restaurantes from "./pages/Restaurantes/Restaurantes";
import Restaurante from "./pages/Restaurante/Restaurante";

export default function AppIndex() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Ingreso />}/>
      <Route path="/registro" element={<Registro />}/>
      <Route path="/hola" element={<Hola />}/>
      <Route path="/filtros" element={<Filtros />}/>
      <Route path="/restaurantes" element={<Restaurantes />}/>
      <Route path='/restaurantes/:id' element={<Restaurante />}/>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppIndex />);