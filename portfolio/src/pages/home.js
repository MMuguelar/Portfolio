import React, { useContext } from "react";
import { CreacionesContext } from "../context/CreacionesContext";
import CreacionCard from "../components/creacionCard";
export default function Home() {
  const { destacados } =
    useContext(CreacionesContext);  
  
  return (    
      <section className="section " id="portfolio">
        <div className="container text-center ">
          <p className="section-subtitle">Bienvenido a nuestros destacados</p>
          <h6 className="section-title mb-6">Portfolio</h6>
          <div className="row ">
            {destacados.map((dest) => (
              <CreacionCard key={dest.id} creacion={dest} />
            ))}
          </div>
        </div>
      </section>    
  );
}
