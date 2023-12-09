import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CardListContext } from "../../context/cards.context";

export default function SearchBar() {
  const { searchInputHandler } = useContext(CardListContext);

  return (
    <Box
      sx={{
        margin: "3rem",
        width: 500,
        maxWidth: "50%",
      }}
    >
      <TextField
        onChange={(e) => searchInputHandler(e)}
        fullWidth
        label="search your product"
        color="primary"
        id="fullWidth"
      />
    </Box>
  );
}
