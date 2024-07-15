import React, { useEffect, useState, useRef, useCallback } from "react";
import { Box } from "@mui/material";
import SearchBar from "./searchBar";
import MoviesList from "./moviesList";

const MainCompo = () => {
  const [search, setSearch] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [page, setPage] = useState(1);
  const observer = useRef();

  // Fetch movies from API
  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDk3NTRjZjIyYmRjZGY1M2E0ODU0ZWE2MWEwYWE3YSIsIm5iZiI6MTcyMTAzNDY1NS4zMDc1NjYsInN1YiI6IjY2OTRlMzcxM2Q3OGM5MWM4M2JiY2RjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NAR1j9ygnuTYTiKlHQlZqy6fk4YCfl5eKWKnZxKwjgg`,
          },
        }
      );
      const data = await response.json();
      setMoviesList((prevMoviesList) => [...prevMoviesList, ...data.results]);
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  // Filter movies based on current filters
  useEffect(() => {
    let filtered = [...moviesList];

    // Filter by search keyword
    if (search.trim() !== "") {
      filtered = filtered.filter(
        (movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase()) ||
          (movie.overview &&
            movie.overview.toLowerCase().includes(search.toLowerCase()))
      );
    }

    // Filter by genre
    if (genre !== "") {
      filtered = filtered.filter((movie) =>
        movie.genre_ids.includes(parseInt(genre))
      );
    }

    // Filter by year
    if (year !== "") {
      filtered = filtered.filter(
        (movie) => movie.release_date && movie.release_date.startsWith(year)
      );
    }

    // Filter by rating
    if (rating !== "") {
      filtered = filtered.filter(
        (movie) =>
          movie.vote_average &&
          parseFloat(movie.vote_average) >= parseFloat(rating)
      );
    }

    setFilteredMovies(filtered);
  }, [search, genre, year, rating, moviesList]);

  // Load more movies when scrolling to the end
  const lastMovieElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  // Initial fetch of movies
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "lightgreen" }}>
      <Box sx={{ paddingTop: "2em" }}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          genre={genre}
          setGenre={setGenre}
          year={year}
          setYear={setYear}
          rating={rating}
          setRating={setRating}
        />
        <MoviesList
          moviesList={filteredMovies}
          search={search}
          lastMovieElementRef={lastMovieElementRef}
        />
      </Box>
    </Box>
  );
};

export default MainCompo;
