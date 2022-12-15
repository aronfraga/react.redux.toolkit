import axios from 'axios';
import { fetchAllCharacters } from '../slices/characterSlices';
import { fetchCharacterDetail } from '../slices/characterSlices';
import { defaultCharacterDetail } from '../slices/characterSlices';
import { findCharacter } from '../slices/characterSlices';

export const getAllCharacters = () => {
  return async (dispatch) => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return dispatch(fetchAllCharacters(response.data.results));
  }
}

export const getCharacterDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get('https://rickandmortyapi.com/api/character/' + id);
    return dispatch(fetchCharacterDetail(response.data));
  }
}

export const cleanCharacterDetail = () => {
  return (dispatch) => {
    return dispatch(defaultCharacterDetail({}));
  }
}

export const findCharacterList = (data) => {
  return (dispatch) => {
    return dispatch(findCharacter(data));
  }
}