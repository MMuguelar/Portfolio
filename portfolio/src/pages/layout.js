import react from "react";
import { Link, Outlet } from "react-router-dom";
import Contacto from "../components/contacto.js";
export default function Layout() {
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
            <Link to="/" class="nav-item nav-link active">
              Home
            </Link>
            <Link to="/creaciones" class="nav-item nav-link">
              Creaciones
            </Link>
            <Link to="/favoritos" class="nav-item nav-link">
              favoritos
            </Link>
            <Link to="/info" class="nav-item nav-link">
              info nuestra
            </Link>
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