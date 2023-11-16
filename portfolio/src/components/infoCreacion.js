import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

export default function InfoCreacion({ creacion }) {
  const { id, titulo, descripcion, imagen, fecha } = creacion || {};

  const { AgregarFavoritos, EliminarDeFavoritos, verificarFavorito } =
    useContext(FavoritosContext);
  const handleOnClick = async () => {
    //que lo mande a la url
  };
  const agregarFav = async () => {
    AgregarFavoritos(creacion);
  };
  const sacarFav = async () => {
    EliminarDeFavoritos(creacion);
  };

  return (
    <>
      {!creacion ? (
        <div>loading</div>
      ) : (
        <div class="row px-xl-5">
          <div class="col-lg-5 pb-5">
            <div
              id="product-carousel"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="">
                {" "}
                {/*si se empieza a superponer con el resto de cosas agregarle la clase alejar */}
                <div class="carousel-item active ">
                  <img
                    class="epicaimagen alejar"
                    /*"carousel-inner border"*/ src={imagen}
                    alt="imagesdfsdf" /*height="300px"whith="auto"*/
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 pb-5">
            <h1 class="font-weight-semi-bold">{titulo}</h1>
            <div class="d-flex mb-3">
              <div class="text-primary mr-2">
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star-half-alt"></small>
                <small class="far fa-star"></small>
              </div>
              <small class="pt-1"></small>
            </div>
            <h3 class="font-weight-semi-bold mb-4">{fecha}</h3>
            <p class="mb-4">{descripcion}</p>
            <div class="d-flex mb-3">
              <div class="d-flex align-items-center mb-4 pt-2">
                <button class="btn btn-primary px-3" onClick={handleOnClick}>
                  <i class="fa fa-shopping-cart mr-1"></i> Ver url
                </button>
                {verificarFavorito(id) ? (
                  <button class="btn btn-danger px-3" onClick={sacarFav}>
                    {" "}
                    <i class="fa fa-shopping-cart mr-1"></i>Eliminar De
                    favoritos
                  </button> // cambiarle el color a rojo o algo así
                ) : (
                  <button class="btn btn-primary px-3" onClick={agregarFav}>
                    {" "}
                    <i class="fa fa-shopping-cart mr-1"></i>Agregar a favoritos
                  </button>
                )}
              </div>
              <div class="d-flex pt-2">
                <div class="d-inline-flex">
                  <a class="text-dark px-2" href="!#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="text-dark px-2" href="!#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="text-dark px-2" href="!#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="text-dark px-2" href="!#">
                    <i class="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
