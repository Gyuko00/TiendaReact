import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/js/pedirDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const category = useParams().category;

  useEffect(() => {
    pedirDatos().then((res) => {
      if (category) {
        setProductos(res.filter((producto) => producto.categoria === category));
        setTitulo(category);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
    </div>
  );
};

export default ItemListContainer;
