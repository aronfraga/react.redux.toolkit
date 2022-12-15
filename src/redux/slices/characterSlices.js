import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    characterDetail: {},
    searchedCharacters: []
  },
  reducers: {
    fetchAllCharacters: (state, action) => { state.characters = action.payload },
    fetchCharacterDetail: (state, action) => { state.characterDetail = action.payload },
    defaultCharacterDetail: (state, action) => { state.characterDetail = action.payload },
    findCharacter: (state, action) => { state.searchedCharacters = action.payload }
  }
});

export const { fetchAllCharacters } = charactersSlice.actions;
export const { fetchCharacterDetail } = charactersSlice.actions;
export const { defaultCharacterDetail } = charactersSlice.actions;
export const { findCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;