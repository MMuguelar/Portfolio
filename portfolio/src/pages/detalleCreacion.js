import react, { useContext, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import {CreacionesContext} from '../context/CreacionesContext';
import CreacionCard from '../components/creacionCard';
import { useParams } from 'react-router-dom';
import InfoCreacion from '../components/infoCreacion';

export default function DetalleCreacion() {

    const { id } = useParams();
    const { creacion, getCreacionById,creaciones} = useContext(CreacionesContext);    

    
    useEffect(() => {
        console.log("el id que me esta llegando", id);
        getCreacionById(id);  
        console.log("la creacion que sale cuando se llama a creacionById", creacion);     
    },[id,creaciones]);

console.log("creacion en detalle cracion");
console.log(creacion);    

    return(
<>
<div class="container-fluid py-5">
<InfoCreacion creacion={creacion}/>
</div>
</>
)

}