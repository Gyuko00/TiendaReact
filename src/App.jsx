import "./helpers/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import AboutUs from "./components/about-us/AboutUs";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/products" element={<ItemListContainer />}/>
          <Route path="/products/:category" element={<ItemListContainer />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
