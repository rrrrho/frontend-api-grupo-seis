import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  role: string;
}

// @ts-ignore  
const user = JSON.parse(localStorage.getItem('user'));

const initialState: UserState = {
  email: user?.email,
  role: user?.role
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ email: string; role: string }>
    ) => {
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logoutUser:( state ) => {
      state.email = initialState.email,
      state.role = initialState.role
    }
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export const selectEmail = (state: { user: UserState }) => state.user.email;
export const selectUser = (state: { user: UserState }) => state.user;
export default userSlice.reducer;
