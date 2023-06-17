import { configureStore } from "@reduxjs/toolkit";
import { starWarsReducer } from "./starWarsSlice";
import { profileReducer } from "./profileSlice";

export default configureStore({
  reducer: {
    starWars: starWarsReducer,
    profile: profileReducer
  }
})