import { createSlice } from "@reduxjs/toolkit";

import { signInWithGoogle, logOut } from "./userOperations";
import { IUser } from "../../../interfaces/IUser";

interface IInitialState {
 user: IUser | null;
 token: string | null;
 erorr: string | null;
}

const initialState: IInitialState = {
 user: null,
 token: null,
 erorr: null,
};

const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(signInWithGoogle.fulfilled, (state, { payload }) => {
    if (payload) {
     state.user = payload.user;
     state.token = payload.token;
    }
   })
   .addCase(signInWithGoogle.rejected, (state, action) => {
    state.erorr = action.payload as string;
   })
   .addCase(logOut.fulfilled, (state) => {
    state.user = null;
    state.token = null;
   })
   .addCase(logOut.rejected, (state, action) => {
    state.erorr = action.payload as string;
   });
 },
});

export default userSlice.reducer;
