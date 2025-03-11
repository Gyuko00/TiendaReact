import React from "react";
import Item from "./Item";
import { toCapital } from "../../helpers/js/toCapital"; 

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="main-title">Lista de {toCapital(titulo)}</h2>
      <div className="productos">
        {
          productos.map((producto) => {
            return <Item key={producto.id} producto={producto} />;
          })
        }
      </div>
    </div>
  );
};

export default ItemList;
