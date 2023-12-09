import React, { useContext } from "react";
import { CardListContext } from "../../context/cards.context";
import "./cardList.styles.css";
function CardList() {
  const { cards } = useContext(CardListContext);
  return (
    <React.Fragment>
      <div className="card-list-container">
        {cards.map((cardItem) => {
          return (
            <div key={cardItem.id} className="card-item">
              <img
                className="card-image"
                src={cardItem.imageUrl}
                alt={cardItem.name}
              />
              <div className="card-content">
                <h3 className="card-title">{cardItem.name}</h3>
                <div className="card-buttons">
                  <button className="card-delete-btn">Delete</button>
                  <button className="card-viewMore-btn">View More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default CardList;
