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
    {
                favoritos.map((fav) => (
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1 contene2">
                        <CreacionCard creacion={fav}/>
                   </div> 
                ))
            }
   
</>
)

}