import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "./searchBar";
import MoviesList from "./moviesList";

const MainCompo = () => {
    const [search, setSearch] = useState();
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "lightgreen" }}>
      <Box sx={{ paddingTop: "2em" }}>
        <SearchBar search={search} setSearch={setSearch} />
        <MoviesList />
      </Box>
    </Box>
  );
};

export default MainCompo;
