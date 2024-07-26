import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 345,
  margin: "auto",
  height: "100%",
  display: "flex",
  padding: "10px",
  boxSizing: "border-box",
  borderRadius: "10px",
  backgroundColor : 'lightskyblue',
  flexDirection: "column",
  cursor: "pointer",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

const convertDate = (time) => {
  const date = new Date(time * 1000);
  return date.toDateString();
};

const CardCompo = ({ data }) => {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          component="img"
          image={data.image}
          alt={data.title}
          sx={{ borderRadius: "10px" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ minHeight: "3.6rem" }}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date : {convertDate(data.date)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location : {data.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </StyledCard>
  );
};

export default CardCompo;
