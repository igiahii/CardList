import React, { useContext, useState } from "react";
import "./cardItem.styles.css";
import { CardListContext } from "../../context/cards.context";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, remove } from "@firebase/database";
import { initializeApp } from "@firebase/app";
function CardItem({ cardItem }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const { cards, setCards } = useContext(CardListContext);
  const { id, name, imageUrl } = cardItem;
  const deleteHandler = () => {
    let initialCards = cards;
    setVisible(false);
    setTimeout(() => {
      let filteredCards = cards.filter((item) => item.id !== id);
      setCards(filteredCards);
    }, 900);
    const db = getDatabase();
    const dataReference = ref(db, "product/" + id);
    remove(dataReference)
      .then(() => {
        alert("your data is successfully deleted! ");
      })
      .catch((error) => setCards(initialCards));
  };
  const viewMoreHandler = () => {
    navigate(`/product/${id}/${name}`);
  };
  return (
    <div className={visible ? "card-item" : "card-item fade-out"}>
      <img className="card-image" src={imageUrl} alt={name} />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-buttons">
          <button onClick={deleteHandler} className="card-delete-btn">
            Delete
          </button>
          <button onClick={viewMoreHandler} className="card-viewMore-btn">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
