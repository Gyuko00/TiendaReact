import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((producto) => {
        return (
          <div key={producto.id}>
            <h3>{producto.titulo}</h3>
            <p>Precio Unitario: ${producto.precio}</p>
            <p>Precio Total: ${producto.precio * producto.cantidad}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
      {carrito.length > 0 ? (
        <>
          <h2>Precio Total: ${precioTotal()}</h2>
          <>
            <button onClick={handleVaciar} className="vaciar-carrito">
              Vaciar Carrito
            </button>
            <Link to="/check-out" className="vaciar-carrito">
              Finalizar Compra
            </Link>
          </>
        </>
      ) : (
        <h2> El carrito está vacío! </h2>
      )}
    </div>
  );
};

export default Carrito;
