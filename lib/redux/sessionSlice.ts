import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "next-auth";

interface SessionState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: SessionState = {
  user: null,
  isAuthenticated: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearSession: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
