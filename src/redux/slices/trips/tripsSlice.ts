import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addTrip, getCurrentWeather } from "./tripsOperations";
import { ITrip } from "../../../interfaces/ITrip";

export interface IState {
 trips: ITrip[];
 error: string | null;
}

const initialState: IState = {
 trips: [],
 error: null,
};

const tripsSlice = createSlice({
 name: "trips",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(addTrip.fulfilled, (state, { payload }: PayloadAction<ITrip>) => {
    state.trips.push(payload);
    state.error = null;
   })
   .addCase(addTrip.rejected, (state, action) => {
    state.error = action.payload as string;
   })
   .addCase(getCurrentWeather.fulfilled, (state, { payload }) => {
    const trip = state.trips.find((item: ITrip) => item.id === payload.id);
    if (trip) {
     trip.weather.currentConditions = payload.currentConditions;
    }
   })
   .addCase(getCurrentWeather.rejected, (state, action) => {
    state.error = action.payload as string;
   });
 },
});

export default tripsSlice.reducer;
