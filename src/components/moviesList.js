import React from "react";
import { Box } from "@mui/material";
import CardCompo from "./card";

const MoviesList = ({ moviesList, search, lastMovieElementRef }) => {
  const filteredMoviesList = moviesList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: "2em", display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
      {filteredMoviesList.map((item, ind) => {
        if (ind === filteredMoviesList.length - 1) {
          return <CardCompo key={ind} data={item} ref={lastMovieElementRef} />;
        } else {
          return <CardCompo key={ind} data={item} />;
        }
      })}
    </Box>
  );
};

export default MoviesList;
