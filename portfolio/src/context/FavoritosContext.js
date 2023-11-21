import { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();
const FavoritosProvider = (props) => {
  const KEY_FAV = "favoritos";
  let objeto = localStorage.getItem(KEY_FAV)
    ? JSON.parse(localStorage.getItem(KEY_FAV))
    : [];

  const [favoritos, setFavoritos] = useState(objeto);

  const AgregarFavoritos = async (creacion) => {
    setFavoritos([...favoritos, creacion]);
  };

  const EliminarDeFavoritos = async (creacion) => {
    let favoritosAux = favoritos;
    favoritosAux = favoritosAux.filter((favo) => favo.id !== creacion.id);
    setFavoritos(favoritosAux);
  };
  const verificarFavorito = (id) => {
    let filtro = favoritos.filter((x) => x.id === id);

    return filtro.length > 0;
  };

  useEffect(() => {
    guardarObjeto(favoritos, KEY_FAV); //en teoría esto debería pisar lo que había con la key antes y guardar el nuevo con el producto eliminado
  }, [favoritos]);

  const guardarObjeto = (objeto, key) => {
    let jsonProductos = JSON.stringify(objeto);
    localStorage.setItem(key, jsonProductos);
  };

  return (
    <>
      <FavoritosContext.Provider
        value={{
          favoritos,
          AgregarFavoritos,
          EliminarDeFavoritos,
          verificarFavorito,
        }}
      >
        {props.children}
      </FavoritosContext.Provider>
    </>
  );
};
export default FavoritosProvider;
