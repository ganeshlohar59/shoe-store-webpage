import React, { useState } from "react";

import style from "./style.module.css";
import { LoopCircleLoading } from "react-loadingg";

import { useParams, useNavigate } from "react-router-dom";

import useFetch from "../../services/useFetch";

const ProductDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`products/${id}`);

  const [sku, setSku] = useState("");

  if (loading)
    return (
      <section>
        <LoopCircleLoading color="#9360FF" />
      </section>
    );

  if (!product)
    return (
      <section id="error-window">
        <img src="/assets/images/error.jpg" alt="" />
      </section>
    );

  if (error) throw error;

  return (
    <div className={style.container}>
      <img
        className={style.product_image}
        src={`/assets/images/${product.image}`}
        alt=""
      />
      <div className={style.product_info_wrapper}>
        <h1>{product.name}</h1>
        <p className="margin_top_small">{product.description}</p>
        <h1 className="margin_top_regular">{product.price + " $"}</h1>
        <div className="margin_top_regular">
          <select
            id="size"
            placeholder="Select Size"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          >
            <option value="">What size?</option>
            {product.skus.map((s) => (
              <option value={s.sku}>{s.size}</option>
            ))}
          </select>
          <button
            disabled={!sku}
            onClick={() => {
              props.addItemToCart(id, sku);
              navigate("/cart");
            }}
            className={style.button_custom}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
