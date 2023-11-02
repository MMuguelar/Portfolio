import react from 'react';
import { Link, Outlet } from "react-router-dom";

export default function CreacionCard({creacion}) {
  console.log("entre a CreacionCard y me llega esto,", creacion);
 
  const {id, titulo, descripcion, imagen, fecha, url } = creacion;
    return(
<>
{/*<div class="card cardD" >
  <img class="card-img-top" src={imagen} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{titulo}</h5>
    <p class="card-text"> {descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">fecha creacion: {fecha}</li>
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
  </ul>
  <div class="card-body">
    <a  class="card-link">otra pagina web</a>
    <a href="#" class="card-link">Another link</a>
  </div>
    </div>*/}
    <div class="">
<div class="card lll contenedor2 CardCircular Borde" >
  <img class="card-img-top tamanoImg" src={imagen} alt="Card image cap"></img>
  <div class="card-body FondoNegroFull Borde">
   


    <center><h3 class="card-title color1">{titulo}</h3>
    <h5 class="card-title color1">{descripcion}</h5>
    
    
   
     
    
      <input type="hidden" name="IdPersonaje" value="@Pj.IdPersonaje"/>
      <button class="CardButtom"  href= {url}  value="@Pj.IdPersonaje">link</button>
      <Link to={`/detalleCreacion/${id}`}> <button class="CardButtom" >DetalleCreacion</button></Link>
    
      

      <h6 class="color1">fecha creacion: {fecha}</h6>
      </center>
  </div>
    </div>
    </div>
</>
)

}

