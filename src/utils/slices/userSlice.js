import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    createUser: (state, action) => {
      state.push(action.payload);
    },

    removeUser: (state, action) => {
      return [];
    },
  },
});

export const { addUser, removeUser, createUser } = userSlice.actions;
export default userSlice.reducer;
