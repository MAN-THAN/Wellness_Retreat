import React from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ search, setSearch, genre, setGenre, year, setYear, rating, setRating }) => {
  const navigate = useNavigate();

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        sx={{
          width: "100%", 
          mb: 2,
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%", flexWrap: "wrap", gap: "1em" }}>
        <FormControl sx={{ minWidth: "45%", flexBasis: "auto" }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={genre}
            onChange={handleGenreChange}
            sx={{ width: "100%" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={28}>Action</MenuItem>
            <MenuItem value={12}>Adventure</MenuItem>
            {/* Add more genres as needed */}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: "45%", flexBasis: "auto" }}>
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            id="year-select"
            value={year}
            onChange={handleYearChange}
            sx={{ width: "100%" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            {/* Add more years as needed */}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: "45%", flexBasis: "auto" }}>
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            id="rating-select"
            value={rating}
            onChange={handleRatingChange}
            sx={{ width: "100%" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={9}>9+</MenuItem>
            <MenuItem value={8}>8+</MenuItem>
            {/* Add more rating options as needed */}
          </Select>
        </FormControl>
      </Box>
      <Button onClick={() => navigate("/favMovies")} sx={{ mt: 2, width: "100%", maxWidth: "15em" }} variant="contained">
        Go to My Fav Movies
      </Button>
    </Box>
  );
};

export default SearchBar;
