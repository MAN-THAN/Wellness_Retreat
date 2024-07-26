import React, { useEffect, useState, useRef, useCallback } from "react";
import { Box, Button } from "@mui/material";
import SearchBar from "./searchBar";
import ItemsList from "./itemsList";
import OnlyDesktopCompo from "./onlyDesktopCompo";

const MainCompo = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);

  // Fetch Data from API
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=3`,
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
  }, [page]);


  // Initial fetch of data
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Box sx={{ padding: "1em" }}>
        <OnlyDesktopCompo />
        <SearchBar
          search={search}
          setSearch={setSearch}
          type={type}
          setType={setType}
          date={date}
          setDate={setDate}
          location={location}
          setLocation={setLocation}
          setList={setList}
          list={list}
        />
        <ItemsList itemsList={list} search={search} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            disabled={page === 1 ? true : false}
            onClick={() => {
              if (page > 1) {
                return setPage(page - 1);
              }
            }}
            sx={{ mt: 2, width: "100%", maxWidth: "10em" }}
            variant="contained"
          >
            Previous
          </Button>
          <Button
            onClick={() => setPage(page + 1)}
            sx={{ mt: 2, width: "100%", maxWidth: "10em" }}
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainCompo;
