import react, { useContext, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import { CreacionesContext } from '../context/CreacionesContext';
import CreacionCard from '../components/creacionCard';
export default function Creaciones() {

    const { creaciones } = useContext(CreacionesContext);
    return (
        <>
            <section class="section" id="portfolio">
                <div class="container text-center">
                    <p class="section-subtitle">Todas nuestras obras</p>
                    <h6 class="section-title mb-6">Creaciones</h6>


                    <div class="row">
                        <div class="col-sm">
                        {
                            creaciones.map((creacion) => (
                                /* {<div class="col-lg-3 col-md-6 col-sm-12 pb-1">}*/
                                <CreacionCard creacion={creacion} />
                                /*  { </div> }*/
                            ))
                        }
                    </div>
                    </div>
                </div>
            </section>
        </>
    )

}