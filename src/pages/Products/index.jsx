import React, { useState } from "react";
import { LoopCircleLoading } from "react-loadingg";
import useFetch from "../../services/useFetch";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function Products() {
  // State
  const [size, setSize] = useState("");

  const { category } = useParams();

  const { data: products, error, loading } = useFetch(
    "products?category=" + category
  );

  // Product Rendering
  function renderProduct(product) {
    const { id, image, name, price } = { ...product };
    return (
      <Link className="link_no_glitter" to={`${id}`}>
        <div key={id} id="product-card">
          <img src={`/assets/images/${image}`} alt={name} />
          <div id="product-info">
            <h3>{name}</h3>
            <h1>{price + "$"}</h1>
          </div>
        </div>
      </Link>
    );
  }

  // Filter Products
  const filterProducts = size
    ? products.filter((product) =>
        product.skus.find((s) => s.size === parseInt(size))
      )
    : products;

  if (error) throw error;
  if (loading)
    return (
      <section>
        <LoopCircleLoading color="#9360FF" />
      </section>
    );
  if (products.length === 0)
    return (
      <section id="error-window">
        {console.log("Error Screen : From Products")}
        <img src="/assets/images/error.jpg" alt="" />
      </section>
    );

  return (
    <section>
      {/* Filter Section */}
      <section id="filters">
        <select
          id="size"
          placeholder="Select Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">All Sizes</option>
          <option value="7">Small 7</option>
          <option value="8">Medium 8</option>
          <option value="9">Large 9</option>
        </select>
      </section>
      <section id="products">{filterProducts.map(renderProduct)}</section>
    </section>
  );
}

export default Products;
