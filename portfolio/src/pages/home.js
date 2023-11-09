import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import { CreacionesContext } from '../context/CreacionesContext';
import CreacionCard from '../components/creacionCard';
export default function Home() {

    const { destacados, getDestacados, creaciones } = useContext(CreacionesContext);
    useEffect(() => {
        getDestacados();
    }, [creaciones]);

    console.log("estos son los destacados que me", destacados);
    return (
        <>
            <section class="section" id="portfolio">
                <div class="container text-center">
                    <p class="section-subtitle">Bienvenido a nuestros destacados</p>
                    <h6 class="section-title mb-6">Portfolio</h6>
                    <div class="row">
                        {
                            destacados.map((dest) => (
                               
                                    <CreacionCard creacion={dest} />
                                
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )

}