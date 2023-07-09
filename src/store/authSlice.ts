import { createSlice } from "@reduxjs/toolkit";
import { VITE_KEY_TOKEN, VITE_KEY_PROFILE } from "../utils/constants";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    info: {
      token: localStorage.getItem(VITE_KEY_TOKEN),
      account: localStorage.getItem(VITE_KEY_PROFILE),
    },
  },
  reducers: {
    setAuth: (
      state,
      action: { payload: { token: string; account: string } }
    ) => {
      console.log("setAuth", action.payload);
      state.info = { ...action.payload };
    },
    removeAuth: (state) => {
      localStorage.removeItem(VITE_KEY_TOKEN);
      localStorage.removeItem(VITE_KEY_PROFILE);
      state.info = { ...state.info, token: null, account: null };
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;

export default authSlice.reducer;
