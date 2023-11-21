import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CreacionesContext = createContext();
const CreacionesProvider = (props) => {
  const [creacion, setCreacion] = useState({});
  const [creaciones, setCreaciones] = useState([]);

  const [destacados, setDestacados] = useState([]);

  const getCreaciones = () => {
    axios
      .get("/Creaciones.json")
      .then((result) => {
        setCreaciones(result.data.creaciones);        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCreacionById = (id) => {
    let creacionesAux = creaciones;
    let creacionAux = creacionesAux.filter((cre) => cre.id === id);
    setCreacion(creacionAux[0]);
  };

  const getDestacados = () => {
    let creacionesAux = creaciones;
    creacionesAux = creacionesAux.filter((creacion) => creacion.destacado);
    setDestacados(creacionesAux);
  };

  useEffect(() => {
    getCreaciones();    
  }, []);


  useEffect(()=>{
    if(creaciones.length>0)
      getDestacados();
  },[creaciones])

  return (
    <>
      <CreacionesContext.Provider
        value={{
          creaciones,
          getCreaciones,
          destacados,
          getDestacados,
          creacion,
          getCreacionById,
        }}
      >
        {props.children}
      </CreacionesContext.Provider>
    </>
  );
};
export default CreacionesProvider;
