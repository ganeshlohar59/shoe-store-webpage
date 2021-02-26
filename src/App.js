import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import { LoopCircleLoading } from "react-loadingg";
import useFetch from "./services/useFetch";

// Routes
import { Route, Routes } from "react-router-dom";

// Components Import
import Header from "./components/Header";

// Pages Import
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(id, sku) {
    setCart((items) => {
      const ItemInCart = items.find((i) => i.sku === sku);
      if (ItemInCart) {
        //Return n new array with matching item replaced
        return items.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        //Return new array with new item appended to existing array
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  function updateQuantity(sku, quantity) {}

  return (
    <div className="container">
      <Header />
      <main id="page_wrapper">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:category" element={<Products />} />
          <Route
            path="/:category/:id"
            element={<ProductDetails addItemToCart={addItemToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
