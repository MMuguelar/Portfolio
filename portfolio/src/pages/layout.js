import { Link, Outlet } from "react-router-dom";
import Contacto from "../components/contacto.js";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext.js";
import Badge from "@mui/material/Badge";
export default function Layout() {
  const { favoritos } = useContext(FavoritosContext);
  const favoritosAux = favoritos;
  return (
    <>
      <header>
        {" "}
        <a href="!#" className="text-decoration-none d-block d-lg-none">
          <h1 className="m-0 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border px-3 mr-1">
              E
            </span>
            Shopper
          </h1>
        </a>
      </header>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py.-3 py-lg-0 px-0">
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">            
            <ul className="nav">
              <li className="item">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
              </li>
              <li className="item">
                <Link to="/creaciones" className="nav-item nav-link">
                  Creaciones
                </Link>
              </li>
              <li className="item">
                <Link to="/favoritos" className="nav-item nav-link">
                  favoritos{" "}
                  <Badge badgeContent={favoritosAux.length} color="primary" />
                </Link>
              </li>
              <li className="item">
                <Link to="/info" className="nav-item nav-link">
                  info nuestra
                </Link>
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
