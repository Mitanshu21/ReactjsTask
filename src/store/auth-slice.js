import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  userEmail: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userEmail = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userEmail = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
