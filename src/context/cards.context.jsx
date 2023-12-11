import { createContext, useEffect, useState } from "react";
// import DATA from "../data/card-items.json";
import { ref, onValue, getDatabase } from "firebase/database";
import { firebaseConfig } from "../utils/firebase";
import { initializeApp } from "@firebase/app";

export const CardListContext = createContext({
  cards: [],
  setCards: () => {},
  searchInputHandler: () => {},
});

export const CardListProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();
    const dataReference = ref(db, "product/");
    onValue(dataReference, (snapshot) => {
      const data = snapshot.val();
      setCards(data);
      setInitial(data);
    });
  }, []);

  //post data to firebase
  // const sendDataToDb = () => {
  //   cards.map((cardItem) => {
  //     return writeProductData(cardItem.id, cardItem.name, cardItem.imageUrl);
  //   });
  // };

  //searchbar filter
  const searchInputHandler = (event) => {
    let newCards = [];
    newCards = initial.filter((item) => {
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
