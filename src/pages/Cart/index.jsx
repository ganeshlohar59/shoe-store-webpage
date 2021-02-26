import React from "react";

import useFetchAll from "../../services/useFetchAll";

const Cart = ({ cart, updateQuantity }) => {
  const urls = cart.map((i) => `products/${i.id}`);

  // Fetch Data
  const { data: products, loading, error } = useFetchAll(urls);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
