import react, { createContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export const CreacionesContext = createContext();
const CreacionesProvider = (props) => {
  const [creaciones, setCreaciones] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [destacados, setDestacados] = useState([])

  const getCreaciones = async () => {
    await axios
      .get("Creaciones.json")
      .then((result) => {
       
        setCreaciones(result.data.creaciones);
        console.log("creaciones:", result.data.creaciones);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDestacados = async () => {
    let creacionesAux = creaciones;
    creacionesAux =  creacionesAux.filter((creacion)=> creacion.destacado == true);
    console.log("creacionesAux", creacionesAux);
    setDestacados(creacionesAux);

  };
  


  useEffect(() => {
    console.log('se va a cargar los productos');
    getCreaciones();
    getDestacados();
    
}, []);

  return (
    <>
      <CreacionesContext.Provider
        value={{
          creaciones,
          getCreaciones,
          favoritos,
          setFavoritos,
          destacados,
          getDestacados
         
        }}
      >
        {props.children}
      </CreacionesContext.Provider>
    </>
  );
}
export default CreacionesProvider;
