import react, { createContext, useContext, useState, useEffect } from "react";
import { CreacionesContext } from "../context/CreacionesContext";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function InfoCreacion({ creacion }) {
  {
    /* const navigate = useNavigate ();
    console.log ("producto: ",producto);
    const { id, title, description, price, category, images } = producto || {};
    const {agregarProducto} = useContext(CarritoContext);
    const handleOnClick = async ()=>{
        await agregarProducto(producto);
        navigate("/carrito");
    }  */
  }

  const [incluir, setIncluir] = useState(true);
  const { id, titulo, descripcion, imagen, fecha, url } = creacion || {};
  console.log(creacion, "la creacion de infoCreacion");

  const { favoritos, AgregarFavoritos, EliminarDeFavoritos } = useContext(CreacionesContext);
  const handleOnClick = async () => {
    //que lo mande a la url
  };
  const agregarFav = async () => {
    AgregarFavoritos(creacion);
  };
  const sacarFav = async () => {
    EliminarDeFavoritos(creacion);
  };

  useEffect(() => {
    setIncluir(true);
    favoritos.map((favs) => {
      if (favs == creacion) {
        console.log("le estas agregando un favorito que ya esta agregado");
        setIncluir(false);
      }
    });
  }, );

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
                <div class="carousel-item active">
                  <img
                    class="carousel-inner border "
                    src={imagen}
                    alt="imagesdfsdf"
                    height="300px"
                    whith="auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 pb-5">
            <h3 class="font-weight-semi-bold">{titulo}</h3>
            <div class="d-flex mb-3">
              <div class="text-primary mr-2">
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star-half-alt"></small>
                <small class="far fa-star"></small>
              </div>
              <small class="pt-1">(500.000 Reviews)</small>
            </div>
            <h3 class="font-weight-semi-bold mb-4">{fecha}</h3>
            <p class="mb-4">{descripcion}</p>
            <div class="d-flex mb-3">
              <div class="d-flex align-items-center mb-4 pt-2">
                <button class="btn btn-primary px-3" onClick={handleOnClick}>
                  <i class="fa fa-shopping-cart mr-1"></i> Ver url
                </button>
                {incluir===false ? (
                <button class="btn btn-danger px-3" onClick={sacarFav}> <i class="fa fa-shopping-cart mr-1"></i>Eliminar De favoritos</button> // cambiarle el color a rojo o algo así
                ): 
                <button class="btn btn-primary px-3" onClick={agregarFav}> <i class="fa fa-shopping-cart mr-1"></i>Agregar a favoritos</button>
                
                }
                
              </div>
              <div class="d-flex pt-2">
                <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                <div class="d-inline-flex">
                  <a class="text-dark px-2" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="text-dark px-2" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="text-dark px-2" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="text-dark px-2" href="">
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
