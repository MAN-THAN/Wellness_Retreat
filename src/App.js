import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MainCompo from './components/mainCompo';
import FavMoviesList from './components/favMoviesList';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Box sx={{ minHeight: '3.5em', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography letterSpacing={'2px'} fontFamily={'cursive'} fontSize={'24px'} fontWeight={700} color={'salmon'}>Fatflixxx</Typography>
          </Box>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainCompo />} />
            <Route path="/favMovies" element={<FavMoviesList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;