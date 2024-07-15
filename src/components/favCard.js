import * as React from 'react';
import { forwardRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 345,
  margin: 'auto',
  height: '100%', 
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s', 
  '&:hover': {
    transform: 'scale(1.05)', 
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

const FavCardCompo = forwardRef(({ data }, ref) => {
  // Construct the full URL for the poster image
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const posterUrl = `${baseImageUrl}${data.poster_path}`;

  const handleAddToFav = () => {
    const favMovies = JSON.parse(localStorage.getItem('favMovies')) || [];
    const isAlreadyFav = favMovies.find(movie => movie.id === data.id);
    if (!isAlreadyFav) {
      favMovies.push(data);
      localStorage.setItem('favMovies', JSON.stringify(favMovies));
    }
  };

  return (
    <StyledCard ref={ref}>
      <CardActionArea>
        <StyledCardMedia
          component="img"
          image={posterUrl}
          alt={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: '3.6rem' }}>
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date : {data.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </StyledCard>
  );
});

export default FavCardCompo;
