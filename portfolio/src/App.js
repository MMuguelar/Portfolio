import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creaciones from "./pages/creaciones";
import Favoritos from "./pages/favoritos";
import Home from "./pages/home";
import Info from "./pages/infoNuestra";
import Layout from "./pages/layout";
import CreacionesProvider from "./context/CreacionesContext";
import FavoritosProvider from "./context/FavoritosContext";
import DetalleCreacion from "./pages/detalleCreacion";
function App() {
  return (
    <>
    <CreacionesProvider>
    <FavoritosProvider>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/creaciones" element={<Creaciones/>}></Route>
            <Route path="/favoritos" element={<Favoritos/>}></Route>
            <Route path="/info" element={<Info/>}></Route>
            <Route path="/detalleCreacion/:id" element={<DetalleCreacion/>}></Route>
          </Route>        

       </Routes>
     </BrowserRouter>
     </FavoritosProvider>
     </CreacionesProvider>
    </>
  );
}

export default App;
