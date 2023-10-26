import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import { CreacionesContext } from '../context/CreacionesContext';
import CreacionCard from '../components/creacionCard';
export default function Home() {

const {destacados, getDestacados, creaciones} = useContext(CreacionesContext);
useEffect(() => {
    getDestacados();
}, [creaciones]);

console.log("estos son los destacados que me", destacados);
    return (
        <>
            {
                destacados.map((dest) => (
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1 contene2">
                        <CreacionCard creacion={dest}/>
                   </div> 
                ))
            }

        </>
    )

}