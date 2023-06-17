import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    fotos: [],
  },
  reducers: {
    addFoto(state, action) {
      state.fotos = [action.payload, ...state.fotos];
    }
  }
});

export const profileReducer = profileSlice.reducer;
export const { addFoto } = profileSlice.actions;