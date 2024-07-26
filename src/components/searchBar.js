import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SearchBar = ({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType,
  setList,
  list
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const filteredItem = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
    const newArr = list.filter((obj, ind) => obj.location === e.target.value);
    setList(newArr);
  }


  const fetchDataBasisOnType = async () => {
    try {
      const response = await fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?type=${type}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataBasisOnSearch = async (search) => {
    try {
      const response = await fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${search}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-around",
          width: "100%",
          gap: "1em",
          alignItems: "center",
          mb: 2,
        }}
      >
        <FormControl
          sx={{
            flex: isMobile ? "none" : "1",
            width: isMobile ? "100%" : "auto",
            minWidth: "200px",
          }}
        >
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type-select"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              fetchDataBasisOnType(e.target.value)
            }}
            sx={{ width: "100%" }}
          >
            <MenuItem value="Signature">Signature</MenuItem>
            <MenuItem value="Standalone">Standalone</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            flex: isMobile ? "none" : "1",
            width: isMobile ? "100%" : "auto",
            minWidth: "200px",
          }}
        >
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location-select"
            value={location}
            onChange={(e) => filteredItem(e)}
            sx={{ width: "100%" }}
          >
            <MenuItem value="Goa">Goa</MenuItem>
            <MenuItem value="Rishikesh">Rishikesh</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            fetchDataBasisOnSearch(e.target.value)
            ;}}
          placeholder="Please Search"
          sx={{
            flex: isMobile ? "none" : "1",
            width: isMobile ? "100%" : "auto",
            minWidth: "200px",
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
