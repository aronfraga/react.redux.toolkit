import { createSlice } from '@reduxjs/toolkit';

export const searchStatus = createSlice({
  name: 'status',
  initialState: {
    searchStatus: false,
  },
  reducers: {
    statusTrue: (state, action) => { state.searchStatus = action.payload },
    statusDefault: (state, action) => { state.searchStatus = action.payload },
  }
});

export const { statusTrue } = searchStatus.actions;
export const { statusDefault } = searchStatus.actions;
export default searchStatus.reducer;