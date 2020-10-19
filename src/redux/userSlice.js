import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },

  reducers: {
    setUser: (state, action) => {
      console.log('action =>', action);
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
