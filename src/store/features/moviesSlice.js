import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  trending: null,
  disney: null,
  originals: null,
};

const userSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.disney = action.payload.disney;
      state.trending = action.payload.trending;
      state.recommend = action.payload.recommend;
      state.originals = action.payload.originals;
    },
  },
});

export const { setMovies } = userSlice.actions;

export default userSlice.reducer;
