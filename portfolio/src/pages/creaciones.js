import  { useContext } from 'react'
import { CreacionesContext } from '../context/CreacionesContext';
import CreacionCard from '../components/creacionCard';
export default function Creaciones() {

    const { creaciones } = useContext(CreacionesContext);
    return (
        <>
            <section className="section" id="portfolio">
                <div className="container text-center">
                    <p className="section-subtitle">Todas nuestras obras</p>
                    <h6 className="section-title mb-6">Creaciones</h6>


                    <div className="row">
                        {
                            creaciones.map((creacion) => (
                                /* {<div className="col-lg-3 col-md-6 col-sm-12 pb-1">}*/
                                <CreacionCard key={creacion.id} creacion={creacion} />
                                /*  { </div> }*/
                            ))
                        }
                    </div>
                    </div>
            </section>
        </>
    )

}