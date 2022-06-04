import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MusicBO } from "../../BO/music";
import { searchMusicAsync } from "./MusicSlice";
import CircularProgress from "@mui/material/CircularProgress";

type MusicSectionProps = {
  searchResults: MusicBO[];
  status: string;
};

export const MusicSection: React.FC<MusicSectionProps> = ({
  searchResults,
  status,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };
  const handleDispatch = (): void => {
    dispatch(searchMusicAsync(searchQuery));
  };

  return (
    <>
      <div className="flex-container">
        <div className="music-search">
          <Paper elevation={8} style={{ padding: 30 }}>
            <h3>Search</h3>
            <TextField
              id="music-search"
              label="Music / Song / Artist"
              variant="standard"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <Button variant="contained" onClick={handleDispatch}>
              Search
            </Button>
          </Paper>
        </div>
        <div className="music-result">
          <Paper elevation={8} style={{ height: 500, padding: 20 }}>
            <h3>Result</h3>
            {status === "loading" && <CircularProgress />}
            <h4> {status}</h4>
            <h4>{JSON.stringify(searchResults)}</h4>
          </Paper>
        </div>
      </div>
    </>
  );
};
