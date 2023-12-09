import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardListContext } from "../../context/cards.context";
import "./product.styles.css";
function Product() {
  const { productId } = useParams();
  const { cards } = useContext(CardListContext);
  const product = cards.find((item) => item.id === parseInt(productId));
  console.log(product);

  return (
    <div className="product-container">
      <img
        className="product-image"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="product-content">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">
          Veraity of hats is a term used to describe the quality of a hat. It
          refers to the level of polishedness, durability, and craftsmanship of
          a hat. A high-quality hat is made from high-quality materials and has
          a durable finish that is easy to keep on and off. It is also made with
          care and attention to detail, and it is designed to fit the
          individual's head and style. A high-quality hat is also a symbol of
          status and wealth, and it can be a powerful tool for personal and
          professional success.
        </p>
      </div>
    </div>
  );
}

export default Product;
