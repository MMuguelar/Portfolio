import { Link } from "react-router-dom";

export default function CreacionCard({ creacion }) {
    const { id, titulo, imagen, fecha, url } = creacion;
  return (
    <>
      <div className="col-md-4 FondoNegro2  radio">
        <div href="!#" className="portfolio-card">
          <img src={imagen} className=" tamanoImg " alt="imagen" />
          <span className="portfolio-card-overlay">
            <span className="portfolio-card-caption">
              <h4>{titulo}</h4>
              <p className="font-weight-normal">fecha creacion: {fecha}</p>
              <button
                className="btn btn-primary btn-sm"
                href={url}
                value="@Pj.IdPersonaje"
              >
                link
              </button>
              <Link to={`/detalleCreacion/${id}`}>
                {" "}
                <button className="btn btn-primary btn-sm">DetalleCreacion</button>
              </Link>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
