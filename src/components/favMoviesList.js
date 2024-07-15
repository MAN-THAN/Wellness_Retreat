import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import FavCardCompo from "./favCard";

const FavMoviesList = () => {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const storedFavMovies = JSON.parse(localStorage.getItem('favMovies')) || [];
    setFavMovies(storedFavMovies);
  }, []);

  return (
    <>
      <Typography
        letterSpacing={"2px"}
        fontFamily={"cursive"}
        fontSize={"24px"}
        fontWeight={700}
      >
        Your Fav Movies
      </Typography>
      <Box
        sx={{
          padding: "2em",
          display: "flex",
          flexWrap: "wrap",
          gap: '1em' 
        }}
      >
        {favMovies.map((movie, index) => (
          <FavCardCompo key={index} data={movie}  />
        ))}
      </Box>
    </>
  );
};

export default FavMoviesList;
