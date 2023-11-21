import  {useContext} from 'react';
import { FavoritosContext } from '../context/FavoritosContext';
import CreacionCard from '../components/creacionCard';

export default function Favoritos() {
    const {favoritos} = useContext(FavoritosContext);    
    return(
<>
<section className="section" id="portfolio">
        <div className="container text-center">
            <p className="section-subtitle">Tus obras favoritas</p>
            <h6 className="section-title mb-6">Favoritos</h6>
            <div className="row">
    {
                favoritos.map((fav) => (
                    
                        <CreacionCard key={fav.id} creacion={fav}/>
                   
                ))
            }
            </div>
         </div>
        </section>
   
</>
)

}