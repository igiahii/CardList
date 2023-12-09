import React from "react";
import SearchBar from "../../components/searchBar/searchBar.component";
import CardList from "../../components/cardList/cardList.component";
function Home() {
  return (
    <div
      className="app"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <SearchBar />
      <CardList />
    </div>
  );
}

export default Home;
