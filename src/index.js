import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ingreso from "./pages/Ingreso/Ingreso";
import Registro from "./pages/Registro/Registro";
import Hola from "./pages/Hola/Hola";
import Filtros from "./pages/Filtros/Filtros";
import Restaurantes from "./pages/Restaurantes/Restaurantes";
import Restaurante from "./pages/Restaurante/Restaurante";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


