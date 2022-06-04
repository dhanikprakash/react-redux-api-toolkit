import { MusicBO } from "./../../BO/music";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../api/fetch-data";
import { initialData } from "./ExampleData";

export const searchMusicAsync: any = createAsyncThunk(
  "fetchData",
  async (searchQuery: string) => {
    const response = await fetchData(searchQuery);
    return response;
  }
);

export const musicSlice = createSlice({
  name: "counter",
  initialState: {
    searchResults: initialData,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMusicAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchMusicAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(
        searchMusicAsync.fulfilled,
        (state, action: PayloadAction<MusicBO[]>) => {
          state.status = "idle";
          if (action.payload !== undefined) {
            state.searchResults = action.payload;
          }
        }
      );
  },
});

export default musicSlice.reducer;
