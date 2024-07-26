import React from "react";
import { Box } from "@mui/material";
const OnlyDesktopCompo = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        padding: "2em",
        display: {xs : 'none', sm : 'none', md : 'flex'},
        flexDirection: "column",
        gap: "5px",
        bgcolor: 'lightskyblue',
        borderRadius: "10px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "80%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        src="https://img.pikbest.com/wp/202346/yoga-poses-asana-by-sunset-a-3d-female-in-pose-amidst-beautiful-landscape_9739512.jpg!bwr800"
        alt="image"
      />

      <Box>
        {" "}
        <h3>Discover Your Inner Peace</h3>
        <h5>Join us in series of Yoga retreats</h5>
      </Box>
    </Box>
  );
};

export default OnlyDesktopCompo;
