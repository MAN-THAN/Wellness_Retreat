import React from "react";
import { Box } from "@mui/material";
import CardCompo from "./card";

const ItemsList = ({ itemsList }) => {

  return (
    <Box sx={{ padding: "2em", display: "flex", flexWrap: "wrap", gap: "1em" }}>
      {Array.isArray(itemsList) && itemsList?.map((item, ind) => (
        <CardCompo key={ind} data={item} />
      ))}
    </Box>
  );
};

export default ItemsList;
