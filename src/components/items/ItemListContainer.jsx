import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().category;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((prod) => {
            return {
              ...prod.data(), id: prod.id
            }
          })
        )
      })
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
    </div>
  );
};

export default ItemListContainer;
