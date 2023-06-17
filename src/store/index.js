import { configureStore } from "@reduxjs/toolkit";
import { starWarsReducer } from "./starWarsSlice";

export default configureStore({
  reducer: {
    starWars: starWarsReducer
  }
})