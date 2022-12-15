import { configureStore } from '@reduxjs/toolkit';
import characters from '../slices/characterSlices';
import characterDetail from '../slices/characterSlices';
import searchedCharacters from '../slices/characterSlices';
import searchStatus from '../slices/statusSlices';

export default configureStore({
  reducer: {
    characters: characters,
    characterDetail: characterDetail,
    searchedCharacters: searchedCharacters,
    searchStatus: searchStatus
  }
});