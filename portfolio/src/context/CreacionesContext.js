import react, { createContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
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
        console.log("creaciones:", result.data.creaciones);

      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCreacionById = (id) => {
  
        let creacionesAux= creaciones;
        let creacionAux =creacionesAux.filter((cre)=>cre.id==id);
        setCreacion(creacionAux[0]);
  };

  const getDestacados = () => {
    let creacionesAux = creaciones;
    creacionesAux =  creacionesAux.filter((creacion)=> creacion.destacado == true);
    console.log("creacionesAux", creacionesAux);
    setDestacados(creacionesAux);

  };
  
  {/*const AgregarFavoritos = async (creacion) => {
    //hacer que si la creacion ya esta en favoritos que no lo agregue
    let incluir=true;
    favoritos.map((favs)=>{
      if (favs==creacion) {
        console.log("le estas agregando un favorito que ya esta agregado");
        incluir=false
      }
        
    });
    if (incluir==true) {
      setFavoritos([...favoritos, creacion]); 
    }
    
  };*/}
  
  

  


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
}
export default CreacionesProvider;
