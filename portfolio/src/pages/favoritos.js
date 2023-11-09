import react, {useContext} from 'react';
import { Link, Outlet } from "react-router-dom";
import { CreacionesContext } from '../context/CreacionesContext';
import CreacionCard from '../components/creacionCard';

export default function Favoritos() {
    const {favoritos} = useContext(CreacionesContext);
    console.log("los favoritos en la page Favoritos");
    console.log(Favoritos);
    return(
<>
<section class="section" id="portfolio">
        <div class="container text-center">
            <p class="section-subtitle">Tus obras favoritas</p>
            <h6 class="section-title mb-6">Favoritos</h6>
            <div class="row">
    {
                favoritos.map((fav) => (
                    
                        <CreacionCard creacion={fav}/>
                   
                ))
            }
            </div>
         </div>
        </section>
   
</>
)

}