import React, { useContext } from "react";
import { CardListContext } from "../../context/cards.context";
import "./cardList.styles.css";
import CardItem from "../cardItem/cardItem.component";
function CardList() {
  const { cards } = useContext(CardListContext);
  return (
    <React.Fragment>
      <div className="card-list-container">
        {cards.map((cardItem) => {
          return <CardItem key={cardItem.id} cardItem={cardItem} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default CardList;
