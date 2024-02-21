import { createAsyncThunk } from "@reduxjs/toolkit";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../../../constants/Firebase";
import { IUser } from "../../../interfaces/IUser";

export const signInWithGoogle = createAsyncThunk(
 "user/signInWithGoogle",
 async (_, { rejectWithValue }) => {
  try {
   const provider = new GoogleAuthProvider();
   const result = await signInWithPopup(auth, provider);
   const credential = GoogleAuthProvider.credentialFromResult(result);
   if (credential) {
    const token = credential.accessToken;
    const user = {
     uid: result.user.uid,
     displayName: result.user.displayName,
     email: result.user.email,
     photoURL: result.user.photoURL,
    };
    return { user, token } as { user: IUser; token: string };
   }
  } catch (error) {
   return rejectWithValue(error as string);
  }
 }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
 try {
  await auth.signOut();
 } catch (error) {
  console.log(error);
 }
});
