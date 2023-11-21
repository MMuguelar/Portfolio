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
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="">
                {" "}
                {/*si se empieza a superponer con el resto de cosas agregarle la clase alejar */}
                <div className="carousel-item active ">
                  <img className="epicaimagen alejar" src={imagen}  alt="imagesdfsdf"  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 pb-5">
            <h1 className="font-weight-semi-bold">{titulo}</h1>
            <div className="d-flex mb-3">
              <div className="text-primary mr-2">
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star-half-alt"></small>
                <small className="far fa-star"></small>
              </div>
              <small className="pt-1"></small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">{fecha}</h3>
            <p className="mb-4">{descripcion}</p>
            <div className="d-flex mb-3">
              <div className="d-flex align-items-center mb-4 pt-2">
                <button className="btn btn-primary px-3" onClick={handleOnClick}>
                  <i className="fa fa-shopping-cart mr-1"></i> Ver url
                </button>
                {verificarFavorito(id) ? (
                  <button className="btn btn-danger px-3" onClick={sacarFav}>
                    {" "}
                    <i className="fa fa-shopping-cart mr-1"></i>Eliminar De
                    favoritos
                  </button> // cambiarle el color a rojo o algo así
                ) : (
                  <button className="btn btn-primary px-3" onClick={agregarFav}>
                    {" "}
                    <i className="fa fa-shopping-cart mr-1"></i>Agregar a favoritos
                  </button>
                )}
              </div>
              <div className="d-flex pt-2">
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-dark px-2" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-dark px-2" href="!#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="text-dark px-2" href="!#">
                    <i className="fab fa-pinterest"></i>
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
