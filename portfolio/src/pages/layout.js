import { Link, Outlet } from "react-router-dom";
import Contacto from "../components/contacto.js";
import react, { useContext, useEffect } from 'react'
import { CreacionesContext } from "../context/CreacionesContext.js";
import Badge from '@mui/material/Badge';
export default function Layout() {
  const {favoritos} = useContext(CreacionesContext);
  const favoritosAux=favoritos;
  return (
    <>
      <header>
        {" "}
      
        <a href="" class="text-decoration-none d-block d-lg-none">
          <h1 class="m-0 display-5 font-weight-semi-bold">
            <span class="text-primary font-weight-bold border px-3 mr-1">
              E
            </span>
            Shopper
          </h1>
        </a>
      </header>
      <nav class="navbar navbar-expand-lg bg-light navbar-light py.-3 py-lg-0 px-0">
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div class="navbar-nav mr-auto py-0">
           {/* <Link to="/" class="nav-item nav-link active">Home</Link>
            <Link to="/creaciones" class="nav-item nav-link">Creaciones</Link>
            <Badge badgeContent={favoritosAux.length}   color="primary">
            <Link to="/favoritos" class="nav-item nav-link">favoritos</Link>
            </Badge>
            <Link to="/info" class="nav-item nav-link">info nuestra</Link>*/}
            <ul class="nav">
                <li class="item">
                <Link to="/" class="nav-item nav-link active">Home</Link>
                </li>
                <li class="item">
                <Link to="/creaciones" class="nav-item nav-link">Creaciones</Link>
                </li>
                <Badge badgeContent={favoritosAux.length}   color="primary">
                <li class="item">
                <Link to="/favoritos" class="nav-item nav-link">favoritos</Link>
                </li>
                </Badge>
                <li class="item">
                <Link to="/info" class="nav-item nav-link">info nuestra</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer>
      
        <Contacto />
      </footer>

      
    </>
  );
}
