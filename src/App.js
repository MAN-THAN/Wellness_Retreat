import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import MainCompo from "./components/mainCompo";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Box
            sx={{
              minHeight: "3.5em",
              backgroundColor: 'navy',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              letterSpacing={"2px"}
              fontSize={"24px"}
              fontWeight={700}
              color={"white"}
            >
              Wellness Retreats
            </Typography>
          </Box>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainCompo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
