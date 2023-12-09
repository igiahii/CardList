import { createContext, useState } from "react";
import DATA from "../data/card-items.json";

export const CardListContext = createContext({
  cards: [],
  setCards: () => {},
  searchInputHandler: () => {},
});

export const CardListProvider = ({ children }) => {
    const [cards, setCards] = useState(DATA);
 //searchbar filter
  const searchInputHandler = (event) => {
    let newCards = [];
    newCards = DATA.filter((item) => {
      if (event.target.value === "") {
        return item;
      } else {
        return item.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }
    });
    setCards(newCards);
  };
  let value = { cards, setCards, searchInputHandler };

  return (
    <CardListContext.Provider value={value}>
      {children}
    </CardListContext.Provider>
  );
};
