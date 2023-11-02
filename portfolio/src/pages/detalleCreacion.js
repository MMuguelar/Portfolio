import react, { useContext, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import { CreacionesContext } from '../context/CreacionesContext';
import CreacionCard from '../components/creacionCard';
import { useParams } from 'react-router-dom';
import { CreacionesContext } from '../context/CreacionesContext';

export default function DetalleCreacion() {

    const { id } = useParams();
    const { creacion, getCreacionById} = useContext(CreacionesContext);    

    
    useEffect(() => {
        console.log("el id que me esta llegando", id);
        getCreacionById(id)       
    },[id]);
    return(
<>

</>
)

}