import react from 'react';
import { Link, Outlet } from "react-router-dom";

export default function Contacto() {

    return(
<>
<form>
<div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Tema</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mb-2">enviar</button>
</form>
<br></br>
<a>Numero:</a>
<br></br>
<a>Mail:</a>
<br></br>
<a>Redes Sociales:</a>
</>
)

}