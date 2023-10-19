import react, { createContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export const CreacionesContext = createContext();
const CreacionesProvider = (props) => {
  const [creaciones, setCreaciones] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const getCreaciones = async () => {
    await axios
      .get("Creaciones.json")
      .then((result) => {
        setCreaciones(result.data.creaciones);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    console.log('se va a cargar los productos');
    getCreaciones();
    
}, []);
  return (
    <>
      <CreacionesContext.Provider
        value={{
          creaciones,
          getCreaciones,
          favoritos,
          setFavoritos,
        }}
      >
        {props.children}
      </CreacionesContext.Provider>
    </>
  );
};
export default CreacionesProvider;
