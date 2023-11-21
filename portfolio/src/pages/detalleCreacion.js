import { useContext, useEffect } from "react";
import { CreacionesContext } from "../context/CreacionesContext";
import { useParams } from "react-router-dom";
import InfoCreacion from "../components/infoCreacion";

export default function DetalleCreacion() {
  const { id } = useParams();
  const { creacion, getCreacionById, creaciones } =
    useContext(CreacionesContext);

  useEffect(() => {
    getCreacionById(parseInt(id));
  }, [id, creaciones, getCreacionById, creacion]);
  return (
    <>
      <div className="container-fluid py-5">
        <InfoCreacion creacion={creacion} />
      </div>
    </>
  );
}
