import { Link } from "react-router-dom";

export default function CreacionCard({ creacion }) {
  console.log("entre a CreacionCard y me llega esto,", creacion);

  const { id, titulo, imagen, fecha, url } = creacion;
  return (
    <>
      <div class="col-md-4 FondoNegro2  radio">
        <a href="!#" class="portfolio-card">
          <img src={imagen} class=" tamanoImg " alt="imagen" />
          <span class="portfolio-card-overlay">
            <span class="portfolio-card-caption">
              <h4>{titulo}</h4>
              <p class="font-weight-normal">fecha creacion: {fecha}</p>
              <button
                class="btn btn-primary btn-sm"
                href={url}
                value="@Pj.IdPersonaje"
              >
                link
              </button>
              <Link to={`/detalleCreacion/${id}`}>
                {" "}
                <button class="btn btn-primary btn-sm">DetalleCreacion</button>
              </Link>
            </span>
          </span>
        </a>
      </div>
    </>
  );
}
