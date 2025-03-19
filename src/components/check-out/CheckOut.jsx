import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const CheckOut = () => {
  const { register, handleSubmit } = useForm();

  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id)
            vaciarCarrito()
        })
  };    

  if (pedidoId) {
    return (
        <div className="container">
            <h1 className="main-title">
                Muchas gracias por tu compra
            </h1>
            <p>Tu número de pedido es: {pedidoId}</p>
        </div>
    )
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar Compra</h1>
      <form action="" className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email")}
        />
        <button type="submit" className="enviar">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
