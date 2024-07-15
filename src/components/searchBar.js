import React from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({search, setSearch}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
    <TextField
      id="outlined-basic"
      label=""
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search"
      sx={{
        width: {
          xs: '100%', // full width on extra small screens
          sm: '80%',  // 80% width on small screens
          md: '60%',  // 60% width on medium screens
          lg: '50%',  // 50% width on large screens
          xl: '40%',  // 40% width on extra large screens
        },
        minHeight: "2.5em", // set minimum height for better appearance
        p: 1,
      }}
    />
  </Box>
  );
};

export default SearchBar;
