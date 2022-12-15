import { statusTrue } from '../slices/statusSlices';
import { statusDefault } from '../slices/statusSlices';

export const setStatusTrue = () => {
  return (dispatch) => {
    return dispatch(statusTrue(true));
  }
}

export const setStatusDefault = () => {
  return (dispatch) => {
    return dispatch(statusDefault(false));
  }
}