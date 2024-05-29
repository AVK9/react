import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  token: null,
  id: null,
  teachers: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setTeachers(state, { payload }) {
      state.teachers = [...state.teachers, ...payload];
    },
  },
});

export const { setUser, removeUser, setTeachers } = userSlice.actions;

export default userSlice.reducer;
