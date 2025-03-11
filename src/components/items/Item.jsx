import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4>{producto.titulo}</h4>
        <p className="precio">Precio: ${producto.precio}</p>
        <div>
          <p className="categoria">Categoría:</p>
          <Link className="categoria" to={`/products/${producto.categoria}`}>
            {" "}
            {producto.categoria}
          </Link>
        </div>
        <p className="descripcion">Descripción: {producto.descripcion}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
