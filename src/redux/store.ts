import { configureStore } from "@reduxjs/toolkit";
import {
 persistStore,
 persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import userReducer from "./slices/user/userSlice";
import tripsReducer from "./slices/trips/tripsSlice";

const persistConfig = {
 key: "root",
 storage,
 whitelist: ["trips"],
 blacklist: ["user"],
};

const store = configureStore({
 reducer: {
  trips: persistReducer(persistConfig, tripsReducer),
  user: persistReducer(persistConfig, userReducer),
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;
