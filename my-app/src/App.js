import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creaciones from './pages/creaciones';
import Favoritos from './pages/favoritos';
import Home from './pages/home';
import Info from './pages/infoNuestra';
import Layout from './pages/layout';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/creaciones" element={<Creaciones/>}></Route>
            <Route path="/favoritos" element={<Favoritos/>}></Route>
            <Route path="/info" element={<Info/>}></Route>
          </Route>        

       </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
