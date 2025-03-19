import "./helpers/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import AboutUs from "./components/about-us/AboutUs";
import Contact from "./components/contact/Contact";
import Carrito from "./components/carrito/Carrito";
import CheckOut from "./components/check-out/CheckOut";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/check-out" element={<CheckOut />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
