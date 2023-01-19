import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
  name: "userName ",
  initialState: "",
  reducers: {
    userN: (state, actions) => {
      const inputUser = actions.payload;

      return inputUser;
    },
  },
});

export const { userN } = userNameSlice.actions;

export default userNameSlice.reducer;
