import { createSlice } from "@reduxjs/toolkit";

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState: {
    facts: [
      'прообразом Чубакки стал пёс режиссёра',
      'актёрам разрешили подобрать любимый цвет для своих световых мечей',
      'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
      'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
      'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
    ],
    selectedFacts: []
  },
  reducers: {
    changeSelectedFacts(state, action) {
      state.selectedFacts = state.facts.slice(0, action.payload);
    }
  }
});

export const starWarsReducer = starWarsSlice.reducer;
export const { changeSelectedFacts } = starWarsSlice.actions;